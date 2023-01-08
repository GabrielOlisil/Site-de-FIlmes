import axios from "axios";
import { DiscoverSearch } from "./interfaces/filme";

const httpClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language: "pt-BR",
        watch_region: "pt-BR",
        sort_by: "popularity.desc",
        locale: "BR"
    }
})

export const API = {
    loadData: async (page: number) => {
        httpClient.defaults.params.page = page;
        let requisicao = await httpClient.get("/discover/movie");

        let filmes: DiscoverSearch = requisicao.data

        filmes.results.forEach(async (filme) =>{
            let requisicao = await httpClient.get(`/movie/${filme.id}?`)
            filme.informations = requisicao.data
        });

        return filmes;
    }
}