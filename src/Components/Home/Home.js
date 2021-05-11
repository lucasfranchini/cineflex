import "./Home.css";
import Movie from "../Movie/Movie";

export default function Home(){
    return (
        <div className="content">
            <div className="title">
                Selecione o filme        
            </div>
            <ul>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </ul>
        </div>
    );
}