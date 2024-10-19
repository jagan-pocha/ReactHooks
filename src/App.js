import "./App.css";
import DeBouncing from "./hooks/DeBouncing";
import UseStateHook from "./hooks/UseStateHook";

function App() {
	return (
		<div className="App">
			<div className="useState">
				{/* <UseStateHook /> */}
				<DeBouncing />
			</div>
		</div>
	);
}

export default App;
