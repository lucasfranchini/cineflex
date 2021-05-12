
import "./seat.css";

export default function Seat(props){
    const {seat} = props;
    return (
        <li className="seat">
            { parseInt(seat.name)<10 ? `0${seat.name}` : seat.name}
        </li>
    );
}