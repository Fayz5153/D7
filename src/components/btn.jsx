import React from 'react'

const MyButton = (props) => {
    console.log(props)
    return ( 
        <button onClick={props.onClick} className={props.aaa}>{props.children}</button>
     );
}
 
export default MyButton;