import "./About.css"
import "../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import clubLogo from "../common/club-logo.png"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import sampleImage from "../common/photos/aaa-background.jpg"
import foolsMoon from "../common/photos/foolsMoon.jpg"
import festifall2023 from "../common/photos/festifall2023.jpg"
import dehtwah2026 from "../common/photos/dehtwah.jpg"
import takioHalloween2 from "../common/photos/takio-halloween-2.jpg"
import leftArrow from "../common/icons/arrow-left.svg"
import rightArrow from "../common/icons/arrow-right.svg"

function NextArrow(props){
    const { style, onClick } = props
    return(
        <div
            className="slick-arrow-next"
            style={{ ...style, display: "flex" }}
            onClick={onClick}
        >
            <img className="slick-arrow-icon" alt="next" src={rightArrow}/>
        </div>
    );
}

function PrevArrow(props){
    const { style, onClick } = props
    return(
        <div
            className="slick-arrow-prev"
            style={{ ...style, display: "flex" }}
            onClick={onClick}
        >
            <img className="slick-arrow-icon" alt="previous" src={leftArrow}/>
        </div>
    );
}

export default function AboutView() {
    const carouselSettings = {
        infinite: true,
        dots: true,
        swipe: false,
        draggable: false,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 7000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    swipe: true,
                    draggable: true
                }
            }
        ]
        // centerMode: true
    }

    return (
        <>
        <div id="about" className="view-section-container">
            <div className="view-content-container">
                <h1 className="view-content-title">About Furries at Umich</h1>
                <p className="view-content-subtitle">Learn more about the club!</p>
                
                {/* What do we do? */}
                <BrowserView>
                    <div className="view-content-three-rows">
                        <img src={clubLogo} className="content-left" alt="Club Logo"/>
                        <div className="content-middle">
                            <h2>What is Furries at Umich?</h2>
                            <p>
                                Furries at Umich is a registered voluntary student organization (VSO) at the University of Michigan - Ann Arbor.
                            </p>
                            <p>
                                We are a member club of the Anthropomorphic Animal Appreciation Association, a global federation of university furry clubs including clubs at UC Berkeley, UIUC, Georgia Tech, and more.
                            </p>
                        </div>
                        <div className="content-right">
                            <h2>What do we do?</h2>
                            <p>
                                We hold weekly meetings where furries can gather, socialize, and collaborate on artistic projects, as well as provide resources for artists and fursuit makers. Additionally, we occasionally host special events such as public fursuiting and field trips to nearby attractions!
                            </p>
                            <p className="action-link">
                                Interested?&nbsp;
                                <a href="#join">
                                    Join now!
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Carousel */}
                    <div className="carousel-desktop-container">
                        <Slider {...carouselSettings} className="carousel-desktop">
			                <img src={dehtwah2026} alt="13 fursuiters in front of buildings on top of the renaissance center in detriot" />
			                <img src={takioHalloween2} alt="Fursuiter in a white tablecloth haunting two other fursuiters" />
                            <img src={foolsMoon} alt="9 fursuiters and 2 non-fursuiters in front of the University of Michigan Orion statue"/>
                            <img src={festifall2023} alt="4 fursuiters hold up club banner behind a sign saying 'Jesus saves from hell'" />
                        </Slider>
                    </div>
                    
                </BrowserView>
                <MobileView>
                    <div>
                        <img src={clubLogo} className="club-logo-mobile" alt="Club Logo" />
                        <div className="view-content-mobile">
                            <h2>What is AAA?</h2>
                            <p>
                                Anthro Art Association (AAA) is a registered voluntary student organization (VSO) at the University of Michigan - Ann Arbor.
                            </p>
                            <p>
                                We are a member club of the Anthropomorphic Animal Appreciation Association, a global federation of university furry clubs including clubs at UC Berkeley, UIUC, Georgia Tech, and more.
                            </p>
                        </div>
                        <div className="view-content-mobile">
                            <h2>What do we do?</h2>
                            <p>
                                We hold weekly meetings where furries can gather, socialize, and collaborate on artistic projects, as well as provide resources for artists and fursuit makers. Additionally, we occasionally host special events such as public fursuiting and field trips to nearby attractions!
                            </p>
                            <p className="action-link">
                                Interested?&nbsp;
                                <a href="#join">
                                    Join now!
                                </a>
                            </p>
                        </div>
                    </div>
                    

                </MobileView>
                
            </div>

        </div>
        <MobileView>
            <div id="about-mobile" className="view-section-container">
                <div className="carousel-mobile-container">
                <Slider {...carouselSettings} className="carousel-mobile">
                    <img src={dehtwah2026} alt="13 fursuiters in front of buildings on top of the renaissance center in detriot" />
                    <img src={takioHalloween2} alt="Fursuiter in a white tablecloth haunting two other fursuiters" />
                    <img src={foolsMoon} alt="9 fursuiters and 2 non-fursuiters in front of the University of Michigan Orion statue"/>
                    <img src={festifall2023} alt="4 fursuiters hold up club banner behind a sign saying 'Jesus saves from hell'" />
                </Slider>
                </div>
            </div>
        </MobileView>
        </>
    )
}
