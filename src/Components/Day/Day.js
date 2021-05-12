import "./day.css";
import Time from "../Time/Time";

export default function Day(props){
    const {day} = props;
    return(
        <li className="day">
            <span>
                {day.weekday} - {day.date}
            </span>
            <ul>
                {day.showtimes.map((time)=><Time key={time.id} time={time}/>)}
            </ul>
        </li>
    );
}