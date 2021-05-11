import "./footer.css";

export default function Footer(props){
    return (
        <div className="footer">
            <div className="movie">
                <img src={props.img} alt={props.title}/>
            </div>
            <span>{props.title}</span>
        </div>
    );
}