import "./Home.css";
import Movie from "../Movie/Movie";

export default function Home(){
    const movies = [
        {
            id: 1,
            img: "https://cafecomnerd.com.br/wp-content/uploads/2020/09/2067-filme-ficcao-cientifica-humanidade-em-busca-de-oxigenio-utilizando-viagem-no-tempo.jpg"
        },
        {
            id: 2,
            img: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg"
        },
        {
            id: 3,
            img: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg"
        }
    ]
    return (
        <div className="content">
            <div className="title">
                Selecione o filme        
            </div>
            <ul>
                {movies.map((movie)=><Movie key={movie.id} movie={movie}/>)}
            </ul>
        </div>
    );
}