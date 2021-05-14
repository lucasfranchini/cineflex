import "./reset.css";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Session from "./Components/Session/Session";
import Seats from "./Components/Seats/Seats";
import Success from "./Components/Success/Success";
import {useState} from "react";

function App(){
	const [reservation,setReservation]= useState({
        name: "",
		day: "",
		time: "",
		seats: [],
		letter: {
			ids: [],
			name: "",
			cpf: ""
		}
    });
	const [pages,setPages] = useState(1);
    return (
		<BrowserRouter>
            <Header pages={pages} setPages={setPages}/>
			<Switch>
				<Route path="/" exact>
                    <Home pages={pages} setPages={setPages}/>
				</Route>
				<Route path="/sessoes/:idFilme" exact>
                    <Session setPages={setPages}/>
				</Route>
				<Route path="/assentos/:idSessao" exact>
                    <Seats reservation={reservation} setReservation={setReservation} setPages={setPages}/>
				</Route>
				<Route path="/sucesso" exact>
                    <Success reservation={reservation} setPages={setPages}/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.querySelector(".root"));

