import "./Movie.css";
import {Link} from "react-router-dom";

export default function Movie(props){
    const {movie} = props;
    return (
        <Link to={`/sessoes/${movie.id}`}>
            <li className="movie">
                <img src={movie.posterURL} alt={movie.title}/>
            </li>
        </Link>
        
    );
}