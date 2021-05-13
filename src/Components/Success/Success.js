import "./success.css";
import Content from "../Content/Content";
import Info from "../info/Info";
import { Link } from "react-router-dom";


export default function Success(props){
    const {reservation} = props;
    const oldCPF = reservation.letter.cpf;
    let newCPF = ""
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
    return (
        <div className="success">
            <Content title= "Pedido feito com sucesso!">
                <Info title="Filme e Sessao" firstInfo={reservation.name} secondInfo ={`${reservation.day} ${reservation.time}`}/>
                <Info title="Ingressos" firstInfo={reservation.seats}/>
                <Info title="Comprador" firstInfo={`Nome: ${reservation.letter.name}`} secondInfo ={`CPF: ${newCPF}`}/>
                <Link to="/"><button>Voltar pra Home</button></Link>
            </Content>
        </div>
    );
}