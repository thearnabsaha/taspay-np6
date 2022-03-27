import { MdDownload } from "react-icons/md";
import { useState } from "react";
import { works } from "../api/works";

const Works = () => {
    const [workData, setWorkData] = useState(works)
    console.log(workData);
    return (
        <>
            <div id="work">
                <div className="container">
                    <h1>How does it Work</h1>
                    <div className="contentContainer">
                    {workData.map((e)=>{
                        return <>
                            <div className="content">
                                <div className="icons"><MdDownload className="icon"/></div>
                                <h2>Download App</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                            </div>
                        </>
                    })}
                        {/* <div className="content">
                            <div className="icons"><MdDownload className="icon"/></div>
                            <h2>Download App</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                        </div>
                        <div className="content">
                            <div className="icons"><MdDownload className="icon"/></div>
                            <h2>Download App</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works;