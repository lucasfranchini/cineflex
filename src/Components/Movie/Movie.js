import "./Movie.css";
import {Link} from "react-router-dom";

export default function Movie(props){
    const {movie} = props;
    return (
        <Link to={`/sessoes/${movie.id}`} onClick={()=> props.changeId(movie.id)}>
            <li className="movie">
                <img src={movie.img} alt={movie.img}/>
            </li>
        </Link>
        
    );
}