import React from "react";
import "./landingpage.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import music from "./video5.mp4";
import { useNavigate } from "react-router-dom";

function Landing({ user }){
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

    const navigate = useNavigate()

    function handleBuyHouse(){
        {user ? (
            navigate("/houses")
        ) : (
            navigate("/login")
        ) }
        
    }

    function handleRentHouse(){
        {user ? (
            navigate("/apartments")
        ) : (
            navigate("/login")
        ) }
        
    }

    function handleSellHouse(){
        {user ? (
            navigate("/seller")
        ) : (
            navigate("/login")
        ) }
        
    }
    return(
        < div id="landing-page">

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

            {/* <div className="top-text">
                <div>
                    <h1 className="landingpage_text1">The Sweetest&nbsp;<span id="hd1">Real Estate</span></h1>
                </div>

                <div>
                    <h2 className="landingpage_text2">In Kenya, NRB</h2>
                </div>
            </div> */}
{/*             
            <div className="middle-button">
            <div className="landingpage_buttons">
                    <button onClick={handleBuyHouse} className="buy_house_button">
                        Buy House
                    </button>

                    <button onClick={handleRentHouse} className="rent_house_button">
                        Rent House
                    </button>

                    <button onClick={handleSellHouse} className="sell_house_button">
                        Sell House
                    </button>
                </div>
            </div> */}

                {/* <div className="landingpage_buttons_width"> */}
                
                {/* </div> */}

                {/* <div className="bottom-text">
                <div className="text_align">
                    <h3><p>Buy, sell and rent real estate, search neighbourhood and get house estimates</p></h3>
                </div>
                </div> */}


            <div className="top-land">
                <h1>The Sweetest <span>Real Estate</span></h1>
                <h2>In Kenya Nairobi</h2>
            </div>

            <div className="middle-land">
                <button className="houses-btn" onClick={handleBuyHouse}>Buy House</button>
                <button className="houses-btn" onClick={handleSellHouse}>Sell House</button>
                <button className="houses-btn" onClick={handleRentHouse}>Rent House</button>
            </div>

            <div className="bottom-land">
                <p>Buy, sell and rent real estate, search neighbourhood and get house estimates</p>
            </div>

                
                <div className="scroll_down_image_container">
                    <BsChevronDoubleDown id="scroll_down_icon"/>
                </div>
                

            </section>
        </div>

    )
}

export default Landing;