import mh from '../public/images/mainHero.png'
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useRef} from 'react';
const Home = () => {
    const form = useRef();
    const sendEmail = (e) => {
    emailjs.sendForm('service_qrac7ua', 'template_r6sex1o', form.current, 'user_SvxI195VxTx62CejHs17q')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
    return (
        <>
            <div id="home">
                <div className="container">
                    <div className="left">
                        <h1>Online Payment Made Easy For You</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae</p>
                        <h3>Get early access for you</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="email" placeholder="Enter Your Email" name="user_email"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <Image src={mh} width="500" height="500" objectFit='cover' alt='arnabs image' className='img' id='img'/>
                </div>
            </div>
        </>
    );
}

export default Home;