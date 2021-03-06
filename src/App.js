import { useRoutes } from "react-router-dom";
import routes from "./router";
import "./App.css";

function App() {
	const routings = useRoutes(routes);
	return <>{routings}</>;
}

export default App;
