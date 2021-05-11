import "./Home.css";
import Movie from "../Movie/Movie";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Home(props){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promise.then((answer)=>{setMovies(answer.data)})
    },[]);
    console.log(movies);
    return (
        <div className="content">
            <div className="title">
                Selecione o filme        
            </div>
            <ul>
                {movies.map((movie)=><Movie key={movie.id} movie={movie}/>)}
            </ul>
        </div>
    );
}