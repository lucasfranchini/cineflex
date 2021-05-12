import "./seats.css";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Seat from "../Seat/Seat";
import Examples from "../Examples/Examples";

export default function Seats(){
    const id = (useParams().idSessao);
    const [session,letSession] = useState(false);
    const [reservation,setReservation]= useState({
        ids: [],
        name: "",
        cpf: ""
    });
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
                    <ul>
                        {session.seats.map((seat)=><Seat key={seat.id} seat={seat}/>)}
                    </ul>
                    <Examples/>
                    <div className="data">
                        <span>Nome do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={()=>console.log("ola")}/>
                    </div>
                    <div className="data">
                        <span>CPF do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={()=>console.log("ola")}/>
                    </div>
                    <button>Reservar assento(s)</button>
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title}/>
            </div>
        </>
    );
}