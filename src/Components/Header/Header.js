import { useHistory } from "react-router";
import "./Header.css";
import { ArrowUndo } from 'react-ionicons'

export default function Header(props){
    let history = useHistory();
    return (
        <div className="header">
            {props.pages && <ArrowUndo color={'#E8833A'} height="50px" width="50px" className="undo" onClick={()=>{
                history.goBack();
                props.cleanReservation();
            }}/>}
            CINEFLIX
        </div>
    );
}