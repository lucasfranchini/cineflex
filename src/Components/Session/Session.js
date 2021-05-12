import "./session.css"
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import Day from "../Day/Day";
import Content from "../Content/Content";
import Loading from "../Loading/Loading";

export default function Session(){
    const [movie,setMovie] = useState(false);
    const id = (useParams().idFilme);
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${id}/showtimes`);
        promise.then((answer)=>setMovie(answer.data))
    },[id]);
    if(movie===false){
        return (
            <Loading/>
        )
    }
    return (
        <div className="content-with-footer">
            <Content title= "Selecione o filme">
                {movie !== false && movie.days.map((day)=> <Day key={day.id} day={day}/>)}
            </Content>
            <Footer img={movie.posterURL} title={movie.title}/>
        </div>
    );
}