import { services } from "../api/services";
const Services = () => {
    return (
        <>
            <div id="services">
                    <h1>How to send money</h1>
                <div className="container">
                    {
                        services.map((e)=>{
                            return <div key={e.id}>
                                <div className="content" >
                                    <h2>{e.title}</h2>
                                    <p>{e.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Services;