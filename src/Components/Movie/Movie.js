import "./Movie.css";

export default function Movie(props){
    const {movie} = props;
    return (
        <li className="movie">
            <img src={movie.img} alt={movie.img}/>
        </li>
    );
}