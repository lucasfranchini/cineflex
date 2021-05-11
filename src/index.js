import "./reset.css";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Session from "./Components/Session/Session";

function App(){
	

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
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.querySelector(".root"));

