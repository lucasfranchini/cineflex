import "./seats.css";
import { useHistory, useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Seat from "../Seat/Seat";
import Examples from "../Examples/Examples";
import Data from "../Data/Data";

export default function Seats(props){
    const id = (useParams().idSessao);
    const {reservation,setReservation} = props;
    const {letter} = reservation;
    const [session,setSession] = useState(false);
    let history = useHistory();
    
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>{
            setSession(answer.data) 
        });
    },[id]);

    function sendRequest(){
        reservation.name=session.movie.title;
        reservation.day= session.day.date;
        reservation.time = session.name;
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",letter);
        promise.then(()=>{
            history.push("/sucesso");
        });
    }

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
                    {reservation.seats.map((seat,i)=>(<Data key={i} seat={seat} reservation={reservation} setReservation={setReservation}/>))}
                    <button onClick={sendRequest}>Reservar assento(s)</button>
                </Content>
                <Footer img={session.movie.posterURL} title={session.movie.title} date={`${session.day.weekday} - ${session.name}`}/>
            </div>
        </>
    );
}