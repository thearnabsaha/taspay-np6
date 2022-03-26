import mh from '../public/images/mainHero.png'
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
    return (
        <div>
            <div id="home">
                <div className="container">
                    <div className="left">
                        <h1>Online Payment Made Easy For You</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae</p>
                        <h3>Get early access for you</h3>
                        <form>
                            <input type="email" placeholder="Enter Your Email"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <Image src={mh} width="500" height="500" objectFit='cover' alt='arnabs image'/>
                </div>
            </div>
        </div>
    );
}

export default Home;