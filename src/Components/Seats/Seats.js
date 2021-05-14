import "./seats.css";
import { useHistory, useParams} from "react-router-dom";
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
    const {letter} = reservation;
    const [session,setSession] = useState(false);
    let history = useHistory();
    
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>{
            props.setPages(3);
            setSession(answer.data) 
        });
    },[id,props]);
    function sendRequest(){
        reservation.name=session.movie.title;
        reservation.day= session.day.date;
        reservation.time = session.name;
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",letter);
        promise.then(()=>{
            props.setPages(4);
            history.push("/sucesso");
        });
    }
    console.log(reservation)
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
                        {session.seats.map((seat)=><Seat key={seat.id} seat={seat} setReservation={setReservation} reservation={reservation}/>)}
                    </ul>
                    <Examples/>
                    <div className="data">
                        <span>Nome do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>{letter.name=e.target.value;setReservation({...reservation})}} value={reservation.letter.name}/>
                    </div>
                    <div className="data">
                        <span>CPF do comprador:</span>
                        <input type="text" placeholder="Digite seu nome..." onChange={(e)=>{letter.cpf=e.target.value;setReservation({...reservation})}} value={reservation.letter.cpf}/>
                    </div>
                    <button onClick={sendRequest}>Reservar assento(s)</button>
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title} date={`${session.day.weekday} - ${session.name}`}/>
            </div>
        </>
    );
}