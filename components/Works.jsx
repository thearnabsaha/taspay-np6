import { MdDownload , MdAttachMoney, MdOutlineScreenShare} from "react-icons/md";
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
                            <div className="content" key={e.id}>
                                <div className="icons"><{e.icon} className="icon"/></div>
                                <h2>{e.title}</h2>
                                <p>{e.desc}</p>
                            </div>
                        </>
                    })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works;