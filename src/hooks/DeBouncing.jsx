import './DeBouncing.css'

const DeBouncing=()=>{

    const fetchDetails=(arg)=>{
        let timer;
        return function(){
            clearTimeout(timer);
            timer=setTimeout(()=>console.log("Searching results for : ", arg),1000);
        }
    }

    const callFetchDetails=fetchDetails('MSI');

    return(
        <div className="deBouncing">
            <button onClick={()=>callFetchDetails()}>Call Function</button>
            {/* <button onClick={fetchDetails("MSI")}>Call Function</button> */}
        </div>
    )
}
export default DeBouncing;