import mh from '../public/images/hero1.jpg'
import Image from 'next/image';
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div id="container">
                    <div className="left">
                        <h1>Connect With Our Sales Team.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque alias similique.</p>
                        <Image src={mh} width="500" height="500" objectFit='cover' alt='arnabs image'/>
                    </div>
                    <div className="right">
                        <div className="form">
                            <form action="POST">
                                <div className="name">
                                    <input type="text" placeholder='First Name'/>
                                    <input type="text" placeholder='Last Name'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;