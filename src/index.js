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

    return (
		<BrowserRouter>
            <Header/>
			<Switch>
				<Route path="/" exact>
                    <Home/>
				</Route>
				<Route path="/sessoes/:idFilme" exact>
                    <Session/>
				</Route>
				<Route path="/assentos/:idSessao" exact>
                    <Seats reservation={reservation} setReservation={setReservation}/>
				</Route>
				<Route path="/sucesso" exact>
                    <Success reservation={reservation}/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.querySelector(".root"));

