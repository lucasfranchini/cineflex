import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Seats(){
    const id = (useParams().idSessao);
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats`);
        promise.then((answer)=>console.log(answer.data))
    },[id]);
    
    return(
        <>
        </>
    );
}