import "./Admins.css";

import rixProfileImg from "../common/pfps/rix-pfp.png"
import mesoonProfileImg from "../common/pfps/mesoon-pfp.jpg"
import foxProfileImg from "../common/pfps/fox-pfp.jpg"
import jowoProfileImg from "../common/pfps/jowo-pfp.jpg"
import fletchelProfileImg from "../common/pfps/fletchel-pfp.png"
import kikojamProfileImg from "../common/pfps/kikojam-pfp.png"
import mosfetProfileImg from "../common/pfps/mosfet-pfp.png"
import placeholderImg from "../common/pfps/placeholder.png"

import emailIcon from "../common/icons/email-icon.svg"
import twitterIcon from "../common/icons/twitter-icon.svg"
import globeIcon from "../common/icons/globe-icon.svg"
import tiktokIcon from "../common/icons/tiktok-icon.png"
import telegramIcon from "../common/icons/telegram-icon.png"
import instagramIcon from "../common/icons/instagram-icon.svg"
import blueskyIcon from "../common/icons/bluesky-icon.svg"
import mastodonIcon from "../common/icons/mastodon-icon.svg"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import URLButton from "../common/URLButton"
import Spacer from "../common/Spacer"

const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function AdminItem(props: {
    name: string, role: string, pfp: any, 
    socialIcon1?: any, socialName1?: string, socialLink1?: string, 
    socialIcon2?: any, socialName2?: string, socialLink2?: string,
}): JSX.Element {

    return (
        <div className="admin-item">
            <img src={props.pfp} className="admin-pfp" alt={`Profile image for ${props.name}`}/>
            <h3 className="admin-name-text">{props.name}</h3>
            <p className="admin-role-text">{props.role}</p>
            {
                (props.socialIcon1 && props.socialName1 && props.socialLink1) &&
                <a href={props.socialLink1} target="_blank" rel="noreferrer">
                    <img src={props.socialIcon1} alt={props.socialName1} className="admin-social-icon"/>
                </a>
            }
            {
                (props.socialIcon2 && props.socialName2 && props.socialLink2) &&
                <a href={props.socialLink2} target="_blank" rel="noreferrer">
                    <img src={props.socialIcon2} alt={props.socialName2} className="admin-social-icon"/>
                </a>
            }
        </div>
    )
}

export default function AdminsView(): JSX.Element {
    
    return (
        <div id="admin" className="view-section-container">
            <div className="view-content-container">
                <h2 className="view-content-title-small">Club Admins</h2>
                <p className="view-content-subtitle">for the 2025-26 school year</p>

                <div className={isMobile ? "admins-view-content-mobile" : "admins-view-content-desktop"}>
                    <AdminItem name="Fox" role="President" pfp={foxProfileImg}/>
                    <AdminItem name="JoWo" role="Vice President" pfp={jowoProfileImg}/>
                    <AdminItem name="Fletchel" role="Communications Chair" pfp={fletchelProfileImg}
                        socialIcon1={blueskyIcon} socialName1="Bluesky" socialLink1="https://bsky.app/profile/fletchel.bsky.social"/>
                    <AdminItem name="KikoJam" role="Finance Chair" pfp={kikojamProfileImg}
                        socialIcon1={blueskyIcon} socialName1="Bluesky" socialLink1="https://bsky.app/profile/kikojam.bsky.social"/>
                    <AdminItem name="Mosfet" role="Recruitment Chair" pfp={mosfetProfileImg}
                        socialIcon1={mastodonIcon} socialName1="Mastodon" socialLink1="https://furry.engineer/@mosfet"/>
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
                <div className={isMobile ? "admins-view-content-mobile" : "admins-view-content-desktop"}>
                    <AdminItem name="Rix" role="2024-25" pfp={rixProfileImg}
                        socialIcon1={twitterIcon} socialName1="Twitter" socialLink1="https://x.com/biteyrix"
                        socialIcon2={globeIcon} socialName2="Website" socialLink2="https://rix.dog"/>
                    <AdminItem name="Whiskey Wolf" role="2024-25" pfp={mesoonProfileImg}/>
                    <AdminItem name="Mosfet" role="2025-26" pfp={mosfetProfileImg}/>
                </div>
            </div>
        </div>
    )
}
