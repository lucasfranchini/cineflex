import "./time.css";
import {Link} from "react-router-dom";

export default function Time(props){
    const {time} = props;
    return(
        <Link to={`/assentos/${time.id}`}>
            <li className="time">
                {time.name}
            </li>
        </Link>
    );
}