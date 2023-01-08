import { useEffect, useState } from "react";
import { API } from "../../api";
import { Filme } from "../../interfaces/filme";
import styles from "./style.module.css";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export default  function Discover(){
    const [filmes, setFilmes] = useState<Filme[]>();
    const [page, setPage] = useState<number>(1);



    
    const load = async ( ) => {
        const data: Filme[] = await API.loadData(page);
        
        setFilmes(data);
    }

    useEffect(() => {
        load();
    }, [page])

    return(
        <div>
            <button onClick={() =>{
                setPage(page - 1);
            }}>Página anterior</button>

            <button onClick={() =>{
                setPage(page +1);
            }}>Próxima página</button>
            {filmes && filmes.map((filme: Filme, key: number) =>{
                return <div key={key}>
                    <div className={styles.Card}>
                        <img src={`${IMAGE_PATH}/${filme.poster_path}`} alt="" />
                        {filme.title}

                    </div>
                </div>
            })}
        </div>
    )
}

