import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Discover from "../components/discover";
import Navbar from "../components/navbar";
import Head from "next/head";
import { Theme } from "../interfaces/theme";

const theme: Theme = {
  backgroundBase: "#242426",
  backgroundLevel1: "#303033",
  borderColor: "#56565C",
  accentColor: "#EDEDFC",
  aboutColor: "#070C10",
};

function homePage() {
  const [page, setPage] = useState(1);
  let pagina = 1;

  return (
    <>
        <Head>
        <title>Site de Filmes</title>
        <meta name="description" content="Um site para encontrar tudo" />
        <meta property="og:title" content="Site de Filmes" />
        <meta property="og:description" content="Descrição da Página" />
        <meta property="og:image" content="https://s2-techtudo.glbimg.com/eE0969wZWBhJYP801LJ5GtRxLvM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/Y/d/HMI5j9SWeMHuDqbJTcfQ/one-piece-foto.jpg" />
        <meta property="og:url" content="https://site-de-filmes.vercel.app/" />
        </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Discover page={page} setPage={setPage} />
      </ThemeProvider>
    </>
  );
}

export default homePage;
