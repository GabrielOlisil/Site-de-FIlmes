import { API } from "../../api";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";


export default function MooviePage({filme}){
    
    

    

    return (
        <div>{filme && filme.title}</div>
    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    
    const {id} = context.params
    let filme = await API.getMoovie(`${id}`);

    if (!filme){
        return {
            notFound: true
        }
    }
    return {
        props: {
            filme
        }
    }
}
