import { useEffect, useState } from "react";
import { API } from "../../api";
import { DiscoverSearch, Filme } from "../../interfaces/filme";
import styled from "styled-components";
import { StyledTypes } from "../../interfaces/styledTypes";


const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";




const StyledDiscover = styled.main`
    background-color: ${({theme}: StyledTypes) => theme.backgroundBase};


    .discover-container {
        max-width: 1500px;
        margin: 0 auto;

        .buttons {
            max-width: fit-content;
            margin: 0 auto;
            display: flex;
            gap: 1rem;
            padding-top: 1rem;

            button {

                color: black;
                background-color: ${({theme}: StyledTypes) => theme.accentColor};
                border: 1px solid ${({theme}: StyledTypes) => theme.borderColor};
                padding: 1em;

            }
        }

        article.discover-content {
            .discover-card {
                display: flex;
                margin: 10px 0;
                background-color: ${({theme}: StyledTypes) => theme.backgroundLevel1};
                color: white;
                gap: 1rem;

                h2 {
                    font-size:3rem;
                }
            }
        }

        
    }


`;

export default  function Discover(){
    const [filmes, setFilmes] = useState<Filme[]>();
    const [page, setPage] = useState<number>(1);



    
    const load = async ( ) => {
        const data: DiscoverSearch = await API.loadData(page);
        const filmes: Filme[] =  data.results;

        const filmesFilter: Filme[] = filmes.filter((filme) => filme.backdrop_path);
        
        setFilmes(filmesFilter);
    }

    useEffect(() => {
        load();
        console.log(filmes)
    }, [page]);




    return(
        <StyledDiscover>
            <div className="discover-container">

                <div className="buttons">

                    <button onClick={() =>{
                        setPage(page - 1);
                    }}>Página anterior</button>

                    <button onClick={() =>{
                        setPage(page +1);
                    }}>Próxima página</button>

                </div>
                <article className="discover-content">
                    {filmes && filmes.map((filme: Filme, key: number) =>{
                        return <div key={key}>



                            <div className="discover-card" >
                                <img src={`${IMAGE_PATH}/${filme.poster_path}`} alt="" />
                                <div>
                                    <h2>
                                        {filme.title}
                                    </h2>
                                    <div>
                                        <span>rating</span>
                                        <span>duration</span>
                                    </div>

                                    <div className="discover-flex">
                                        <p>{filme.overview}</p>

                                    </div>

                                </div>



                            </div>



                        </div>
                    })}
                </article>
            </div>
        </StyledDiscover>
    )
}

