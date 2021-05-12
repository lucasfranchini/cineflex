
import { useEffect, useState } from "react";
import "./seat.css";

export default function Seat(props){
    const {seat,setReservation,reservation} = props;
    const [type,setType] = useState("seat");
    useEffect(()=>{if(seat.isAvailable===false) setType("seat unavaliable");},[setType,seat.isAvailable]);
    function selectSeat(){
        if(seat.isAvailable===true){
            reservation.ids.push(seat.id);
            setReservation({...reservation});
            setType("seat selected");    
        }else alert("Esse assento não está disponível");
    }
    function deselectSeat(){
         reservation.ids = reservation.ids.filter((id)=>seat.id!==id);
        setReservation({...reservation});
        setType("seat");    
    }
    return (
        <li className={type} onClick={type==="seat selected" ? deselectSeat:selectSeat}>
            { parseInt(seat.name)<10 ? `0${seat.name}` : seat.name}
        </li>
    );
}