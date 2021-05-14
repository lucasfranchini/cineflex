
import { useEffect, useState } from "react";
import organize from "../Organize";
import "./seat.css";

export default function Seat(props){
    const {seat,setReservation,reservation} = props;
    const [type,setType] = useState("seat");
    useEffect(()=>{if(seat.isAvailable===false) setType("seat unavaliable");},[setType,seat.isAvailable]);
    function selectSeat(){
        if(seat.isAvailable===true){
            reservation.letter.ids.push(seat.id);
            reservation.seats.push(seat.name);
            reservation.letter.compradores.push({
                idAssento: seat.id,
                nome: "",
                cpf: ""
            })
            reservation.seats.sort((seat1,seat2)=>organize(seat1,seat2));
            reservation.letter.ids.sort((id1,id2)=>organize(id1,id2));
            reservation.letter.compradores.sort((comprador1,comprador2)=>organize(comprador1.idAssento,comprador2.idAssento));
            setReservation({...reservation});
            setType("seat selected");    
        }else alert("Esse assento não está disponível");
    }
    function deselectSeat(){
        reservation.letter.ids = reservation.letter.ids.filter((id)=>seat.id!==id);
        reservation.letter.compradores = reservation.letter.compradores.filter((comprador)=>seat.id!==comprador.idAssento);
        reservation.seats = reservation.seats.filter((seatSelected)=>seatSelected!==seat.name);
        setReservation({...reservation});
        setType("seat");    
    }
    return (
        <li className={type} onClick={type==="seat selected" ? deselectSeat:selectSeat}>
            { parseInt(seat.name)<10 ? `0${seat.name}` : seat.name}
        </li>
    );
}