import React,{ useEffect,useState } from 'react'

function Home() {
    const [username,setUsername]=useState('');
    const [show,setShow]=useState(false);
        const Homepage= async()=>{
    try {
        const res= await fetch("/getdata",{
            method:"GET",
            headers:{
                "content-type":"application/json",
            },
        });
        console.log(res)
        const data=await res.json();
        setUsername(data.name);
        setShow(true);
    } catch (err) {
        console.log(`the error is ${err}`);
    
    }
        }
        useEffect(() => {
            Homepage();
        }, [])
    return (
        <div className="home_page ">
            <div className="home_div ml-5 mt-5">
                <p>WELCOME</p>
                <h1>{username}</h1>
                <h1>{show ? "Happy to see you back":"mernstack developer"}</h1>
            </div>
        </div>
    )
}
export default Home
