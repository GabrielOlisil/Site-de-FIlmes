import { useEffect, useReducer, useState } from "react";
import { API } from "../../api";
import { DiscoverSearch, Filme } from "../../interfaces/filme";
import styled from "styled-components";
import { StyledTypes } from "../../interfaces/styledTypes";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from "next/image";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";




const StyledDiscover = styled.main`
    background-color: ${({ theme }: StyledTypes) => theme.backgroundBase};

    

    .discover-container {
        max-width: 1500px;
        margin: 0 auto;




        article.discover-content {

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 0 1rem;
            @media (max-width: 1200px){
                grid-template-columns: 1fr;
                padding: 0 2rem;
                gap: 0;

            }
            @media (max-width: 690px){
                padding: 0 1rem;

            }

            .discover-card {
                display: flex;
                margin: 10px 0;
                background-color: ${({ theme }: StyledTypes) => theme.backgroundLevel1};
                color: white;
                gap: .5rem;

                div.discover-img{

                    flex-shrink: 0;
                    
                    height: 24rem;
                    padding: .3rem;

                    .lazy-img {
                        object-fit: contain;
                        height: 280;
                        width: 420;
                    }
                }

                .discover-information {
                    h2 {
                        cursor: pointer;
                        a {
                            color: white;
                            &:hover{
                                color: #ffffffa4;
                                text-decoration: none;
                            }
                        }
                    }
                    

                    .tags-info{
                        font-size: .8rem;
                        color: ${({theme} : StyledTypes) => theme.accentColor};
                        display: flex;
                        gap: 1rem;

                        margin: 1em 0;

                        .tags {
                            display: flex;
                            flex-wrap: wrap;
                            gap: .3rem;


                            .genre {
                                color:  ${({theme}: StyledTypes) => theme.accentColor};
                                border: 2px solid  ${({theme}: StyledTypes) => theme.accentColor};
                                border-radius: .7rem;
                                padding: 0 .5rem;

                                &:hover {
                                    border-color: #fcdb25;
                                    background-color: #fcdb25;
                                    color: black;
                                    cursor: pointer;
                                }
                            }
                        }

                    }
                }

            }
        }


    }


`;

export default function Discover({page, setPage}) {
    let isLoading: boolean = false;
    
    const initialState: Filme[] = []

	const filmesReducer = (state: Filme[], action : Filme[]) => {

        if(action){
            
            return [...state, ...action];
        }
        return state
	}

	const [state, dispatch] = useReducer(filmesReducer, initialState);



	const load = async () => {
        isLoading = true;
        const data: DiscoverSearch = await API.loadData(page);
        const _filmes: Filme[] = data.results;
		const newList: Filme[] = _filmes.filter((filme) => filme.backdrop_path);

        dispatch(newList);
        isLoading = false;
		
    }

    useEffect(() => {
        load();
    }, [page]);

    


    return (
        <StyledDiscover >
			<div className="discover-container">

                <article className="discover-content">
                    {state && state.map((filme: Filme, key: number) => {
                        return <div key={key}>



                            <div className="discover-card" >
                                <div className="discover-img">
                                    
                                    
                                     <LazyLoadImage className="lazy-img" src={`${IMAGE_PATH}/${filme.poster_path}`} alt={`Poster do filme: ${filme.title}`} effect="blur" width="280" height="421" placeholderSrc={`${IMAGE_PATH}/${filme.poster_path}`} /> 
                                    


                                </div>
                                <div className="discover-information">

                                    <h2>
                                        <Link href={`/moovie/${filme.id}`} legacyBehavior>
                                            <a >

                                            {filme.title}
                                            </a>
                                        </Link>

                                    </h2>
                                    <div className="tags-info">
                                        <span>

                                            {filme.informations?.release_date}
                                        </span>

                                        <span className="tags">
                                            {[...filme.informations?.genres].slice(0,3).map((genero, key) =>{
                                                return <span key={key} className="genre">
                                                    {genero.name}
                                                </span>
                                            })}
                                        </span>
                                    </div>

                                    <div>
                                        <span>Duração: {Math.floor(filme.informations?.runtime / 60)}h{Math.floor(filme.informations?.runtime % 60 )}m.</span>
                                    </div>

                                    <div className="discover-flex">
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

