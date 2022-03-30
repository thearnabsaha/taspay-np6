import mh from '../public/images/hero1.jpg'
import Image from 'next/image';
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="left">
                        <h1>Connect With Our Sales Team.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque alias similique.</p>
                        <Image src={mh} width="400" height="400" objectFit='cover' alt='arnabs image'/>
                    </div>
                    <div className="right">
                        <div className="form">
                            <form action="POST">
                                <div className="name">
                                    <input type="text" placeholder='First Name'/>
                                    <input type="text" placeholder='Last Name'/>
                                </div>
                                <div className="con">
                                    <input type="tel" name="" id="" placeholder='Phone Number'/>
                                    <input type="email" name="" id="" placeholder='Email ID'/>
                                </div>
                                <input type="text" placeholder='Add Address'/>
                                <input type="text" placeholder='Enter the message'/>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;