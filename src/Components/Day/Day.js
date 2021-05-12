import "./day.css";
import Time from "../Time/Time";

export default function Day(props){
    const {day} = props;
    console.log(props);
    return(
        <li className="day">
            <span>
                {day.weekday} - {day.date}
            </span>
            <ul>
                {day.showtimes.map((time)=><Time key={time.id} name={time.name}/>)}
            </ul>
        </li>
    );
}