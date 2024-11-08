import { useState } from 'react'
import './EventDelegation.css'

const EventDelegation=()=>{

    const [total, setTotal]=useState(120);

    const handleDiscount=(e)=>{
        const percent=e.target.dataset.percent??0;
        setTotal(total-(percent/100)*total);
    }

    return(
        <div className="eventDelegation">
            <div className="sub_total">
                <p>Sub Total: $120</p>
            </div>
            <div className="discount_buttons" onClick={(e)=>handleDiscount(e)}>
                <button data-percent={5}>5%</button>
                <button data-percent={10}>10%</button>
                <button data-percent={15}>15%</button>
                <button data-percent={20}>20%</button>
            </div>
             <div className="total_bill">
                <p>Total Bill: ${total}</p>
            </div>
        </div>
    )
}
export default EventDelegation;