import Image from 'next/image';
import styled from 'styled-components';
const AboutContainer = styled.div`
  flex-direction:${(props)=>(props.variant==="reverse"?"row":"row-reverse")};
`;
const About = (props) => {
    return (
        <>
            <div id="about">
                <div>
                    <AboutContainer className="container" variant={props.variant}>
                        <div className="right">
                            <Image src={props.img} width="300" height="500" objectFit='cover' alt='arnabs image' className="img"/>
                        </div>
                        <div className="left">
                            <h4>{props.uptitle}</h4>
                            <h1>{props.title}</h1>
                            <div className="contentContainer">
                                {
                                    props.data.map((e)=>{
                                        return <div key={e.id}>
                                                <div className="content">
                                                    <h3>{e.id}</h3>
                                                    <div className="desc">
                                                        <h2>{e.title}</h2>
                                                        <p>{e.desc}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    })
                                }
                                <h5>Learn More</h5>
                            </div>
                        </div>
                    </AboutContainer>
                </div>
            </div>
        </>
    );
}

export default About;