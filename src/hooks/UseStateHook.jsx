import { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
	const [userDetails, setUserDetails] = useState({
        name:"Steve",
        Age:25,
        address:{
            country:"America",
            city:"Denver"
        }
    });

    console.log({...userDetails});

	return (
		<div className="useState">
			<button onClick={() => setUserDetails({
                ...userDetails,
                address:{...userDetails.address,city:"New York"}
            })}
            >Change City</button>
		</div>
	);
};
export default UseStateHook;











// const [count, setCount] = useState(0);

// 	return (
// 		<div className="useState">
// 			<button onClick={() => setCount(count - 1)}>Decrement</button>
// 			<p>{count}</p>
// 			<button onClick={() => setCount(count + 1)}>Increment</button>
// 		</div>
// 	);