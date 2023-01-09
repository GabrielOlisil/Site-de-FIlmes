
export interface Filme {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string; 
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    informations: FilmeInformations;
}


export interface DiscoverSearch {
    results: Filme[];
    page: number;
    total_pages: number;
    total_results: number;
}


export interface FilmeInformations {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {backdrop_path: null | string, id: number, name: string, poster_path: null | string} | null
    budget: number;
    genres: Array<{id: number, name: string}>;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<{name: string, id: number, logo_path: string | null, origin_country: string}>
    production_countries: Array<{iso_3166_1: string, name: string}>
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: Array<{iso_639_1: string, name: string}>;
    status: "Rumored" |  "Planned" | "In Production"| "Post Production"| "Released"| "Canceled";
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
