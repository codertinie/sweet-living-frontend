import React from "react";
import "./landingpage.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import music from "./video1.mp4";

function landing(){
    window.addEventListener('scroll', windowScrolled)

    function windowScrolled(){
        const yScroll = window.scrollY
        const icon = document.getElementById('scroll_down_icon')

        if (yScroll >= 100){
            icon.style.display = "none"
        }else {
            icon.style.display = "block"
        }
    }
    return(
        <>
        
        </>
        // <div>
        //     <h1>This is will be our landing page</h1>
        // </div>
    )
}

export default landing;