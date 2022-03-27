import { useState } from "react";
import { send } from "../api/send";
import Image from 'next/image';
import mh from '../public/images/hero3.jpg'
const About = () => {
    const [sendData, setSendData] = useState(send)
    return (
        <>
            <div id="about">
                <div>
                    <div className="container">
                        <div className="right">
                            <Image src={mh} width="300" height="500" objectFit='cover' alt='arnabs image' className="img"/>
                        </div>
                        <div className="left">
                            <h4>-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h4>
                            <h1>How to use the App?</h1>
                            <div className="contentContainer">
                                {
                                    sendData.map((e)=>{
                                        return <>
                                                <div className="content" key={e.id}>
                                                    <h3>{e.id}</h3>
                                                    <div className="desc">
                                                        <h2>{e.title}</h2>
                                                        <p>{e.desc}</p>
                                                    </div>
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