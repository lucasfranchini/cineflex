import "./reset.css";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Session from "./Components/Session";

function App(){
	const [selectedId, setSelectedId] = React.useState(0);

    return (
		<BrowserRouter>
            <Header/>
			<Switch>
				<Route path="/" exact>
                    <Home changeId={setSelectedId}/>
				</Route>
				<Route path={`/sessoes/:${selectedId}`} exact>
                    <Session/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.querySelector(".root"));

