import { useCallback, useState } from "react";
import PowerOfTwo from "./PowerOfTwo";
import './Memoization.css'


const Memoization=()=>{

    const [power, setPower]=useState(0);

    const calculatePowerTwo=PowerOfTwo();

    return(
        <div className="memoization">
            <input  type="number" onChange={(e)=>setPower(e.target.value)} value={power} />
            <button onClick={()=>calculatePowerTwo(power)}>Calculate</button>
        </div>
    )
}

export default Memoization;