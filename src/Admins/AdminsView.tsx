import React, { useState } from "react";
import "./Admins.css";

// Profile Images
import rixProfileImg from "../common/pfps/rix-pfp.png"
import mesoonProfileImg from "../common/pfps/mesoon-pfp.jpg"
import mosfetProfileImg from "../common/pfps/mosfet-pfp.png"
import tigerLilyProfileImg from "../common/pfps/tiger-lily-pfp.png"
import kayleProfileImg from "../common/pfps/kayle-pfp.png"
import theoProfileImg from "../common/pfps/theo-pfp.jpg"
import jaykProfileImg from "../common/pfps/jayk-pfp.png"
import deweyProfileImg from "../common/pfps/dewey-pfp.png"
import snepImg from "../common/pfps/snep-jump-pfp.png"
import sheepImg from "../common/pfps/sheep-pfp.png"
import deerImg from "../common/pfps/deer.png"
import theoHugImg from "../common/pfps/theo-hug.png"


// Icons
import emailIcon from "../common/icons/email-icon.svg"
import twitterIcon from "../common/icons/twitter-icon.svg"
import globeIcon from "../common/icons/globe-icon.svg"
import instagramIcon from "../common/icons/instagram-icon.svg"
import blueskyIcon from "../common/icons/bluesky-icon.svg"

import { isMobile } from "react-device-detect"
import URLButton from "../common/URLButton"
import Spacer from "../common/Spacer"

// --- Sub-component: AdminItem ---
function AdminItem(props: {
    name: string, role: string, pfp: any, 
    socialIcon1?: any, socialName1?: string, socialLink1?: string,
    socialIcon2?: any, socialName2?: string, socialLink2?: string,
    onClick?: () => void, // New Prop
}): JSX.Element {
    return (
        <div 
            className="admin-item" 
            onClick={props.onClick} 
            style={{ cursor: props.onClick ? "pointer" : "default" }}
        >
            <img src={props.pfp} className="admin-pfp" alt={`Profile image for ${props.name}`}/>
            <h3 className="admin-name-text">{props.name}</h3>
            <p className="admin-role-text">{props.role}</p>
            <div className="admin-socials-container">
                { (props.socialIcon1 && props.socialName1 && props.socialLink1) &&
                    <a href={props.socialLink1} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <img src={props.socialIcon1} alt={props.socialName1} className="admin-social-icon"/>
                    </a>
                }
                { (props.socialIcon2 && props.socialName2 && props.socialLink2) &&
                    <a href={props.socialLink2} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <img src={props.socialIcon2} alt={props.socialName2} className="admin-social-icon"/>
                    </a>
                }
            </div>
        </div>
    )
}

interface AnimationStates {
  isTigerAnimating: boolean;
  isDeerAnimating: boolean;
  isDogAnimating: boolean;
  timeAtDogAnimation: number;
}

// --- Main Component ---
export default function AdminsView(): JSX.Element {
    const [animationState, setAnimationState] = useState({
        isTigerAnimating: false,
        isDeerAnimating: false,
        isDogAnimating: false,
        timeAtDogAnimation: -1
    });

    const triggerTigerAnimation = () => {
        if (animationState.isTigerAnimating) return;
        setAnimationState({
          ...animationState,
          isTigerAnimating: true,
        });

        // Reset state after animation finishes (4s + buffer)
        setTimeout(() => setAnimationState(prevState => ({
          ...prevState,
          isTigerAnimating: false,
        })), 4500);
    };

    const triggerDeerAnimation = () => {
        if (animationState.isDeerAnimating) return;
        setAnimationState({
          ...animationState,
          isDeerAnimating: true,
        });

        setTimeout(() => setAnimationState(prevState => ({
          ...prevState,
          isDeerAnimating: false,
        })), 3500);
    };

    const triggerDogAnimation = () => {
        if (animationState.isDogAnimating) return;
        
        setAnimationState({
          ...animationState,
          isDogAnimating: true,
          timeAtDogAnimation: Date.now()
        });

        setTimeout(() => setAnimationState(prevState => ({
          ...prevState,
          isDogAnimating: false,
          timeAtDogAnimation: -1
        })), 600);
    };

    return (
        <div id="admin" className="view-section-container">
            
            {/* The Animation Overlay */}
            {animationState.isTigerAnimating && (
                <div className="animation-overlay">
                    <div id="animation-container">
                        <img id="snow-leopard" src={snepImg} alt="Snow Leopard" />
                        <img id="blue-sheep" src={sheepImg} alt="Himalayan Blue Sheep" />
                    </div>
                </div>
            )}

            {animationState.isDeerAnimating && (
                <div className="animation-overlay">
                    <div id="animation-container">
                        <img id="deer" src={deerImg} alt="Deer" />
                    </div>
                </div>
            )}

            {animationState.isDogAnimating && (
                <div className="animation-overlay">
                    <div id="animation-container">
                        <img id="theo-hug" src={theoHugImg} alt="Theo hug sticker" />
                    </div>
                </div>
            )}

            <div className="view-content-container">
                <h2 className="view-content-title-small">Club Admins</h2>
                <p className="view-content-subtitle">for the 2026-27 school year</p>
                
                <div className={isMobile ? "admins-view-content-mobile rounded-bg" : "admins-view-content-desktop rounded-bg"}>
                    <AdminItem
                        name="Dewey"
                        role="President"
                        pfp={deweyProfileImg}
                        socialIcon1={instagramIcon}
                        socialName1="Instagram"
                        socialLink1="https://www.instagram.com/deweydadeer"
                        onClick={triggerDeerAnimation}
                    />

                    <AdminItem
                        name="Theo"
                        role="Vice President"
                        pfp={theoProfileImg} 
                        socialIcon1={instagramIcon} socialName1="Instagram"
                        socialLink1="https://www.instagram.com/theoboops/"
                        socialIcon2={globeIcon} socialName2="Website"
                        socialLink2="https://links.theoboops.com"
                        onClick={triggerDogAnimation}
                    />

                    <AdminItem name="Jayk" role="Recruitment Chair" pfp={jaykProfileImg} />

                    <AdminItem
                        name="Kayle"
                        role="Finance Chair"
                        pfp={kayleProfileImg}
                        socialIcon1={instagramIcon} socialName1="Instagram"
                        socialLink1="https://www.instagram.com/kaylestuffs/"
                    />

                    <AdminItem 
                        name="Tiger Lily" 
                        role="Communications Chair" 
                        pfp={tigerLilyProfileImg}
                        socialIcon1={instagramIcon} 
                        socialName1="Instagram" 
                        socialLink1="https://www.instagram.com/tigerlilyuwu/"
                        onClick={triggerTigerAnimation} 
                    /> 
                </div>

                <URLButton img={emailIcon} text="Send an email to admins" color="white" backgroundColor="#00274C" invertIconColor={true} smallerIcon={true}
                    url="mailto:anthroartassociation@gmail.com" alt="Email Icon"/>
                
                <div style={{ textAlign: "center" }}>
                    <span>Button not working? Try <a href="mailto:anthroartassociation@gmail.com">anthroartassociation@gmail.com</a></span>
                </div>
            </div>

            <Spacer height={12} />

            <div className="view-content-container" style={{ marginBottom: "-16px"}}>
                <h2 className="view-content-title-small">Web Devs</h2>
                <p className="view-content-subtitle">The nerds who worked on this website:</p>
                
                <div className={isMobile ? "admins-view-content-mobile rounded-bg" : "admins-view-content-desktop rounded-bg"}>
                    <AdminItem name="Rix" role="2024-25" pfp={rixProfileImg}
                        socialIcon1={twitterIcon} socialName1="Twitter" socialLink1="https://x.com/biteyrix"
                        socialIcon2={globeIcon} socialName2="Website" socialLink2="https://rix.dog" />

                    <AdminItem name="Whiskey Wolf" role="2024-25" pfp={mesoonProfileImg}
                        socialIcon1={instagramIcon} socialName1="Instagram" socialLink1="https://www.instagram.com/whikkiwolf/" />

                    <AdminItem name="Mosfet" role="2025-26" pfp={mosfetProfileImg} />

                    <AdminItem
                        name="Dewey"
                        role="2026-2027"
                        pfp={deweyProfileImg}
                        socialIcon1={instagramIcon}
                        socialName1="Instagram"
                        socialLink1="https://www.instagram.com/deweydadeer"
                        onClick={triggerDeerAnimation}
                    />

                    <AdminItem 
                        name="Tiger Lily" 
                        role="2026-2027" 
                        pfp={tigerLilyProfileImg}
                        socialIcon1={instagramIcon} 
                        socialName1="Instagram" 
                        socialLink1="https://www.instagram.com/tigerlilyuwu/"
                        onClick={triggerTigerAnimation} 
                    /> 
                </div>
            </div>
        </div>
    )
}