import React from "react";

const Child=({showModal,setShowModal})=>{

    return(

        <div>
            <h2>Child Component</h2>
            <button onClick={()=>setShowModal(true)}>Show Modal</button>
            {
                showModal==true &&(
                    <div>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Child