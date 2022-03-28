import { FaFacebookSquare,FaInstagram,FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container">
                    <h1>Follow Us</h1>
                        <div className="icons">
                            <a href="https://www.facebook.com/thearnabsaha1" target="_blank"><FaFacebookSquare/></a>
                            <a href="https://www.instagram.com/thearnabsaha/" target="_blank"><FaInstagram/></a>
                            <a href="https://twitter.com/TheArnabSaha" target="_blank"><FaTwitter/></a>
                        </div>
                    <p>Copyright @ 2021 TasPay. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
