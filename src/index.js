import "./reset.css";
import ReactDOM from "react-dom";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";

function App(){
    return (
		<BrowserRouter>
            <Header/>
			<Switch>
				<Route path="/" exact>
                    <Home/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<App/>, document.querySelector(".root"));

