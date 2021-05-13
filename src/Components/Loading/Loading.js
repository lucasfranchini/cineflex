import "./loading.css";
import loading from "./loading.png";


export default function Loading(){
    return (
        <div className="loading">
            <img src={loading} alt= "loading"/>
            <span>Carregando</span>
        </div>
    );
}