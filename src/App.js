import "./App.css";
import DeBouncing from "./hooks/DeBouncing";
import Memoization from "./hooks/Memoization";
import UseStateHook from "./hooks/UseStateHook";

function App() {
	return (
		<div className="App">
			<div className="useState">
				{/* <UseStateHook /> */}
				{/* <DeBouncing /> */}
				<Memoization />
			</div>
		</div>
	);
}

export default App;
