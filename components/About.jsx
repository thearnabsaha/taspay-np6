import { useState } from "react";
import { send } from "../api/send";
const About = () => {
    const [sendData, setSendData] = useState(send)
    return (
        <>
            <div id="about">
                <div className="container">
                    <h3>-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                    <div className="container">
                        <div className="right">

                        </div>
                        <div className="left">
                            <h1>How to use the App?</h1>
                            <div className="contentContainer">
                                {
                                    sendData.map((e)=>{
                                        return <>
                                            <h3>1</h3>
                                            <h2>sign in</h2>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, Etquia quis?Lorem ipsum, Etquia quis?</p>
                                        </>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;