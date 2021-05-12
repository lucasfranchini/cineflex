import Movie from "../Movie/Movie";
import {useState,useEffect} from "react";
import axios from "axios";
import Content from "../Content/Content";
import Loading from "../Loading/Loading";

export default function Home(props){
    const [movies,setMovies] = useState(false);
    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promise.then((answer)=>{setMovies(answer.data)})
    },[]);
    if(movies===false){
        return (
            <Loading/>
        )
    }
    return (
        <Content title= "Selecione o filme">
                {movies.map((movie)=><Movie key={movie.id} movie={movie}/>)}        
        </Content>
       
    );
}

