
import { API } from "../../api";
import { DiscoverSearch, Filme } from "../../interfaces/filme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function MooviePage(){
    const [filme, setFilme] = useState<Filme>();
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        load();
    }, [])

    async function load() {
        let filme = await API.getMoovie(`${id}`);

        setFilme(filme)
    }

    return (
        <div>{filme && filme.title}</div>
    )
}
