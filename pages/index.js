import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Services from "../components/Services";

const index = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default index;