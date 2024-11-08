import "./App.css";
import DeBouncing from "./hooks/DeBouncing";
import EventDelegation from "./hooks/EventDelegation";
import Memoization from "./hooks/Memoization";
import UseStateHook from "./hooks/UseStateHook";

function App() {
	return (
		<div className="App">
			<div className="useState">
				{/* <UseStateHook /> */}
				{/* <DeBouncing /> */}
				{/* <Memoization /> */}
				<EventDelegation />
			</div>
		</div>
	);
}

export default App;
