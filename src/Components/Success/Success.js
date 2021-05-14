import "./success.css";
import Content from "../Content/Content";
import Info from "../info/Info";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Success(props){
    const {reservation} = props;
    reservation.letter.compradores.forEach((comprador)=>{
        const oldCPF = comprador.cpf;
        let newCPF = "";
        for(let i=0;i<oldCPF.length;i++){
            if(i%9===0 && i!==0){
                newCPF+=`-${oldCPF[i]}`;
            }
            else if(i%3===0 && i!==0){
                newCPF+=`.${oldCPF[i]}`;
            }
            else{
                newCPF+=oldCPF[i];
            }
        }
        comprador.cpf = newCPF;
    });

    useEffect(()=>props.setPages(true),[props])
    
    return (
        <div className="success">
            <Content title= "Pedido feito com sucesso!">
                <Info title="Filme e Sessao" firstInfo={reservation.name} secondInfo ={`${reservation.day} ${reservation.time}`}/>
                <Info title="Ingressos" firstInfo={reservation.seats}/>
                {reservation.letter.compradores.map((comprador,i)=><Info key={comprador.idAssento} title={`Comprador do assento ${reservation.seats[i]}`} firstInfo={`Nome: ${comprador.nome}`} secondInfo ={`CPF: ${comprador.cpf}`}/>)}
                <Link to="/"><button>Voltar pra Home</button></Link>
            </Content>
        </div>
    );
}