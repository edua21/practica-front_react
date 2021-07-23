import React from 'react'
import './css/style.css';

function Toast(props) {
    setTimeout(
        function(){ 
            let x = document.getElementById("snackbar");
            x.className = x.className.replace("show", "none")}, 3000);
    return  <>
                <div className="show" id="snackbar">{props.msg}</div>  
            </>
    
}

export default Toast;

