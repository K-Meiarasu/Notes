import React from "react";

const Output = (props,index) => {
    const item=props.item
    return(
        <div>
            <div className='out'>
                <h4>{item.title}</h4>
                <p>{item.note}</p>
                <button className='del' onClick={() => props.removeItem(index)}>DELETE</button>
            </div>
        </div>
    )
}

export default Output