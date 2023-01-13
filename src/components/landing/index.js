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
        <div className="overlay"></div>
            <video playsinline="playsinline"
                playbackRate="0.75"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
                id="row-hero-video"
            >
        <source src={music} type="video/mp4"/>
            </video>

            <section className="landing_section">
                <div className="landingpage_text1">
                    <h1><strong>The Sweetest <span>Real Estate</span></strong></h1>
                </div>

                <div className="landingpage_text2">
                    <h2><span>In Kenya, NRB</span></h2>
                </div>

                <div className="scroll_down_image_container">
                    <BsChevronDoubleDown id="scroll_down_icon"/>
                </div>

                <div className="landingpage_buttons_width">
                <div className="landingpage_buttons">
                    <button className="buy_house_button">
                        Buy House
                    </button>

                    <button className="rent_house_button">
                        Rent House
                    </button>

                    <button className="sell_house_button">
                        Sell House
                    </button>
                </div>
                </div>

                <div className="text_align">
                    <h3><p>Buy, sell and rent real estate, search neighbourhood and get house estimates</p></h3>
                </div>

            </section>
        </>
        // <div>
        //     <h1>This is will be our landing page</h1>
        // </div>
    )
}

export default landing;