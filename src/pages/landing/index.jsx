import { useState } from 'react'
import NavigationBar from "../../components/landing/NavigationBar";
import Intro from "../../components/landing/Intro";
import Beach from "../../components/landing/Beach";
import Mountain from "../../components/landing/Mountain";
import  "../../styles/landing/main.css";


function Landing() {
    return (
        <div>
            <div className={"mainBg"}>
                <NavigationBar />
                <Intro />
            </div>
            <div className={"mainBeach"}>
                <Beach />
            </div>
            <div className={"mainMountain"}>
                <Mountain />
            </div>
        </div>
    )
}

export default Landing
