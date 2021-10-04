import React,{ useEffect,useState } from "react";
// import User from "../../../folder1/model/userschema";
const Contact = () => {
 
    const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
        const Contactpage= async()=>{
    try {
        const res= await fetch("/getdata",{
            method:"GET",
            headers:{
               
                "content-type":"application/json",
            },
        });
        console.log(res)
        const data=await res.json();
        setUserData(data);
        
       if(res.status!==200){
           const error=new Error(res.error)
           throw error;
       }
    } catch (err) {
        console.log(`the error is ${err}`);
    }
        }
        useEffect(() => {
            Contactpage();
        }, [])
        // storing the data in user state
        const handelInputs=(e)=>{
const name=e.target.name;
const value=e.target.value;
setUserData({...userData,[name]:value})
        }
        // send the user message to the backend

const contactForm=async(e)=>{
e.preventDefault();
const {name,email,phone,message}=userData;
const res=await fetch("/contact",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(
        {name,email,phone,message})

});
const data=await res.json()
if(!data){
    console.log("message not sent");
}else{
    alert("message sent")
    setUserData({...userData,message:""})
}
}
    return (
        <>
            <div className="contact_info">
                <div className="container">
                    <div className="row">
                        <div className="col=lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item justify=content-start align-items-center">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        phone
                                    </div>
                                    <div className="contact_info_title">
                                        +91123456789
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item justify=content-start align-items-center">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        email
                                    </div>
                                    <div className="contact_info_title">
                                        123@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item justify=content-start align-items-center">
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        address
                                    </div>
                                    <div className="contact_info_title">
                                        hyderabad,ts,india
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact form */}
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 ">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in touch
                                </div>
                                <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        <input className="form-control" type="text" placeholder="your name" required="true" value={userData.name} onChange={handelInputs} name="name" />
                                        <input className="form-control" type="email" placeholder="your email" required="true"  value={userData.email} onChange={handelInputs} name="email"/>
                                        <input className="form-control" type="number" placeholder="your number" required="true"  value={userData.phone} onChange={handelInputs} name="phone"/>
                                    </div>
                                    <div className="contact_form_text mt-5">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message" value={userData.message} onChange={handelInputs} name="message"></textarea>
                                    </div>
                                    <div className="contact_form_button mt-3">
                                    <button  onClick={contactForm} type="submit" class="btn btn-primary login-btn btn-block ">send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact