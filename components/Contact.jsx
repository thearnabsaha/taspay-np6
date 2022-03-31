import mh from '../public/images/hero1.jpg'
import Image from 'next/image';
import { useState} from 'react';
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
    // connect with firebase
    const submitData=async(e)=>{
        e.preventDefault()
        const { firstName, lastName, phone, email,address, message } = records;
        if( firstName && lastName && phone && email && address && message ){
            const res = fetch(
                "https://taspay-np6-default-rtdb.firebaseio.com/taspayDatabase.json",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }
            );
            if (res) {
                setRecords({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("plz fill the data");
                }
        }else{
            alert("fill all the fields")
        }
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
                                    <input type="tel" placeholder='Phone Number' name="phone" value={records.phone} onChange={changeHandler}/>
                                    <input type="email" name="email" placeholder='Email ID' value={records.email} onChange={changeHandler}/>
                                </div>
                                <input type="text" placeholder='Add Address' name="address" value={records.address} onChange={changeHandler}/>
                                <input type="text" placeholder='Enter the message' name="message" value={records.message} onChange={changeHandler}/>
                                <button type='submit' onClick={submitData}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;