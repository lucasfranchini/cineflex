import "./day.css";

export default function Day(props){
    const {day} = props;
    return(
        <li className="day">
            <span>
                {day.weekday} - {day.date}
            </span>
        </li>
    );
}