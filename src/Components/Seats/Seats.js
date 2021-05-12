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
    const [session,setSession] = useState(false);
    const [reservation,setReservation]= useState({
        ids: [],
        name: "",
        cpf: ""
    });
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>setSession(answer.data))
    },[id]);
    console.log(session);
    if(session===false){
        return (
            <Loading/>
        )
    }
    console.log(reservation);
    return(
        <>
            <div className="content-with-footer">
                <Content title= "Selecione o(s) assento(s)">
                    <ul>
                        {session.seats.map((seat)=><Seat key={seat.id} seat={seat} setReservation={setReservation} reservation={reservation}/>)}
                    </ul>
                    <Examples/>
                    <div className="data">
                        <span>Nome do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setReservation({...reservation,name: e.target.value})} value={reservation.name}/>
                    </div>
                    <div className="data">
                        <span>CPF do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setReservation({...reservation,cpf: e.target.value})} value={reservation.cpf}/>
                    </div>
                    <button>Reservar assento(s)</button>
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title}/>
            </div>
        </>
    );
}