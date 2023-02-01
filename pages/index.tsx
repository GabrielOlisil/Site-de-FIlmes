import {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import Discover from "../components/discover";
import Navbar from "../components/navbar";
import { Theme } from "../interfaces/theme";

const theme: Theme = {
    backgroundBase: "#242426",
    backgroundLevel1: "#303033",
    borderColor:  "#56565C",
    accentColor: "#EDEDFC",
    aboutColor: "#070C10"
}

function homePage(){

	const [page, setPage] = useState(1);
    let pagina = 1;

    


    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Discover page={page} setPage={setPage}/>
        </ThemeProvider>
    )
}

export default homePage;
