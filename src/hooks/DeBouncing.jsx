import './DeBouncing.css'

const DeBouncing=()=>{

    const fetchDetails=(arg)=>{
        //Every time we call fetchDetails a new timer is created 
        let timer;
        return function(){
            // This inner function remembers the old timer even the fetch Details 
            // is removed from memory stack, that is the concept of closure Here
            // closure can remember outer variables 
            clearTimeout(timer);
            timer=setTimeout(()=>console.log("Searching results for : ", arg),1000);
        }
    }

    //Calling the function this way by coping is called currying
    //here fetchDetails is returning a function which we are copying to callFetch Details
    //and again calling callFetchDetails whenever required in called currying
    const callFetchDetails=fetchDetails('MSI');

    return(
        <div className="deBouncing">
            <button onClick={()=>callFetchDetails()}>Call Function</button>
            {/* <button onClick={fetchDetails("MSI")}>Call Function</button> */}
        </div>
    )
}
export default DeBouncing;