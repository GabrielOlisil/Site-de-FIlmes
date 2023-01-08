import axios from "axios";
import { fetchDiscover } from "./interfaces/filme";

const httpClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language: "pt-BR",
        include_video: true
    }
})

export const API = {
    loadData: async (page: number) => {
        httpClient.defaults.params.page = page;
        let filmes = await httpClient.get("/discover/movie");

        return filmes.data.results;
    }
}