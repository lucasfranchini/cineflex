
import { useEffect, useState } from "react";
import "./seat.css";

export default function Seat(props){
    const {seat,setReservation,reservation} = props;
    const [type,setType] = useState("seat");
    useEffect(()=>{if(seat.isAvailable===false) setType("seat unavaliable");},[setType,seat.isAvailable]);
    function selectSeat(){
        if(seat.isAvailable===true){
            reservation.letter.ids.push(seat.id);
            reservation.seats.push(seat.name);
            reservation.seats.sort((seat1,seat2)=>{
                if(parseInt(seat1)<parseInt(seat2)) return -1;
                if(parseInt(seat1)>parseInt(seat2)) return 1;
                return 0;
            });
            setReservation({...reservation});
            setType("seat selected");    
        }else alert("Esse assento não está disponível");
    }
    function deselectSeat(){
        reservation.letter.ids = reservation.letter.ids.filter((id)=>seat.id!==id);
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