import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Seat from "../Seat/Seat";

export default function Seats(){
    const id = (useParams().idSessao);
    const [session,letSession] = useState(false);
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>letSession(answer.data))
    },[id]);
    console.log(session);
    if(session===false){
        return (
            <Loading/>
        )
    }
    return(
        <>
            <div className="content-with-footer">
                <Content title= "Selecione o(s) assento(s)">
                    {session.seats.map(()=><Seat/>)}
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title}/>
            </div>
        </>
    );
}

/*
const row = Math.ceil(session.seats.length/10);
    const seatsRow = [];
    for(let i=0;i<row;i++){
        for(let j=0;j<10;j++){
            
        }
    }
    */