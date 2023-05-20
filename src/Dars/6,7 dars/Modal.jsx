import React, { useState } from 'react'
import "./style.css"

const Modal = () => {
    const [open, setOpen]= useState(false)
    const modalOpen = () =>{
        setOpen(!open)
    }
    console.log(open)
    return ( 
        <React.Fragment>
            <button onClick={modalOpen}>Modal</button>
            <div className={open === false ? 'modal' : "modal modal_open"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, perspiciatis?
            </div>
        </React.Fragment>
     );
}
 
export default Modal;