import hero3 from '../public/images/hero3.jpg'
import callcenter from '../public/images/callcenter.jpg'
import About from "../components/About";
const TotalAbout = () => {
    return (
        <>
            <About title="How to use the App?" uptitle="-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY" img={hero3}/>
            <About title="World class support is available 24/7" uptitle="-- SUPPORT IN ANY LANGUAGES" img={callcenter} style={{backgroundColor: "lightblue"}}/>
        </>
    );
}

export default TotalAbout;