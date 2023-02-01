import { NextApiRequest, NextApiResponse } from 'next';
import { API } from '../../api';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const {page} = req.query;

    if (!page) {
        res.send({message: "No page delimited"})
    }


    

    const searchFilms = await API.loadData(+page)
    console.log()
    
    res.json(searchFilms)
}