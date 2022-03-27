// import { useState } from "react";
// import { send } from "../api/send";
import Image from 'next/image';
const About = (props) => {
    // const [sendData, setSendData] = useState(send)
    return (
        <>
            <div id="about">
                <div>
                    <div className="container">
                        <div className="right">
                            <Image src={props.img} width="300" height="500" objectFit='cover' alt='arnabs image' className="img"/>
                        </div>
                        <div className="left">
                            <h4>{props.uptitle}</h4>
                            <h1>{props.title}</h1>
                            <div className="contentContainer">
                                {
                                    props.data.map((e)=>{
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
                                <h5>Learn More</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;