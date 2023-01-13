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
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Discover />
        </ThemeProvider>
    )
}

export default homePage;
