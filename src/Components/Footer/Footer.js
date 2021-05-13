import "./footer.css";

export default function Footer(props){
    return (
        <div className="footer">
            <div className="movie">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="text">
                <span>{props.title}</span>
                <span>{props.date}</span>
            </div>
        </div>
    );
}