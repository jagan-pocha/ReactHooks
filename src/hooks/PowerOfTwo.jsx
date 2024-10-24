import { useCallback } from "react";

const PowerOfTwo=()=>{
    const cache=new Map();

    //Use call back to preserve cache data
    // since we are entering the input and updating the state the this 
    //function gets called and reset cache so use call back to call only on button click
    return useCallback((key)=>{

        if(cache.has(key)){
            console.log("From if block : ", cache.get(key));
        }
        else{
            const value=Math.pow(2,key);
            cache.set(key, value);
            console.log("From else block : ", value)
        }
        
    },[]);
}

export default PowerOfTwo;