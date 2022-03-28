import mh from '../public/images/mainHero.png'
import Image from 'next/image';
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div id="container">
                    <div className="left">
                        <h1></h1>
                        <p></p>
                        <Image src={mh} width="500" height="500" objectFit='cover' alt='arnabs image'/>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;