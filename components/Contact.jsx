import mh from '../public/images/hero1.jpg'
import Image from 'next/image';
import { useState } from 'react';
const Contact = () => {
    const [records, setRecords] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",

    })
    const changeHandler =(e)=>{
        setRecords({[e.target.name]:e.target.value});
    }
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
                                    <input type="text" placeholder='First Name' name="firstName" value={records.firstName} onChange={changeHandler}/>
                                    <input type="text" placeholder='Last Name' name="lastName" value={records.lastName} onChange={changeHandler}/>
                                </div>
                                <div className="con">
                                    <input type="tel" name="" id="" placeholder='Phone Number' name="phone" value={records.phone} onChange={changeHandler}/>
                                    <input type="email" name="email" id="" placeholder='Email ID' name="" value={records.email} onChange={changeHandler}/>
                                </div>
                                <input type="text" placeholder='Add Address' name="address" value={records.address} onChange={changeHandler}/>
                                <input type="text" placeholder='Enter the message' name="message" value={records.message} onChange={changeHandler}/>
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