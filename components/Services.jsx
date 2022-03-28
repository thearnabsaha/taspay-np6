import { services } from "../api/services";
const Services = () => {
    return (
        <>
            <div id="services">
                    <h1>How to send money</h1>
                <div className="container">
                    {
                        services.map((e)=>{
                            return <>
                                <div className="content" key={e.id}>
                                    <h1>{e.title}</h1>
                                    <p>{e.desc}</p>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Services;