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
                                                <div className="content" key={e.id}>
                                                    <h3>{e.id}</h3>
                                                    <h2>{e.title}</h2>
                                                    <p>{e.desc}</p>
                                                </div>
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