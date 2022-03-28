import {MdApi} from "react-icons/md";
import { useState } from "react";
import { works } from "../api/works";

const Works = () => {
    const [workData, setWorkData] = useState(works)
    return (
        <>
            <div id="work">
                <div className="container">
                    <h1>How does it Work</h1>
                    <div className="contentContainer">
                    {workData.map((e)=>{
                        return <div key={e.id}>
                                    <div className="content">
                                        <div className="icons"><MdApi className="icon"/></div>
                                        <h2>{e.title}</h2>
                                        <p>{e.desc}</p>
                                    </div>
                                </div>
                    })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works;