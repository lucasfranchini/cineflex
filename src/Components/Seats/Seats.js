import "./seats.css";
import {Redirect, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Seat from "../Seat/Seat";
import Examples from "../Examples/Examples";

export default function Seats(props){
    const id = (useParams().idSessao);
    const {reservation,setReservation} = props;
    const [session,setSession] = useState(false);
    const [redirect,setRedirect] = useState(false);
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>setSession(answer.data))
    },[id]);
    console.log(session);
    function sendRequest(){
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",reservation.letter);
        promise.then(()=>setRedirect(true));
        
    }
    if(session===false){
        return (
            <Loading/>
        )
    }
    console.log(reservation);
    return(
        <>
            <div className="content-with-footer">
                {redirect && <Redirect to="/sucesso"/>}
                <Content title= "Selecione o(s) assento(s)">
                    <ul>
                        {session.seats.map((seat)=><Seat key={seat.id} seat={seat} setReservation={setReservation} reservation={reservation}/>)}
                    </ul>
                    <Examples/>
                    <div className="data">
                        <span>Nome do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>{reservation.letter.name=e.target.value;setReservation({...reservation})}} value={reservation.letter.name}/>
                    </div>
                    <div className="data">
                        <span>CPF do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>{reservation.letter.cpf=e.target.value;setReservation({...reservation})}} value={reservation.letter.cpf}/>
                    </div>
                    <button onClick={sendRequest}>Reservar assento(s)</button>
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title}/>
            </div>
        </>
    );
}