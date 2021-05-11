import "./session.css";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Session(){
    const [movie,setMovie] = useState({});
    const id = (useParams().idFilme);
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${id}/showtimes`);
        promise.then((answer)=>setMovie(answer.data))
    },[]);
    console.log(movie);

    
    return (
        <>
            <div className="content">
                <div className="title">
                    Selecione o horário      
                </div>
                <ul>
                </ul>
            </div>
            <Footer img="" title=""/>
        </>
    );
}