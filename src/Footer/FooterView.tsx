import React from "react";
import "./Footer.css";
import { isMobile } from "react-device-detect";

export default function Footer(): JSX.Element {
    return (
        <div id={isMobile ? "footer-mobile" : "footer"}>
            <div className="footer-content">
                <p className="footer-copyright">
                    
                </p>
            </div>
        </div>
    );
}