import React, { useEffect,useState } from 'react'
import Nit from "../images/nit puducheery.jpg"
import Mern from "../images/mern.jpg"
import Personal from "../images/vivek website pic.jpeg"
import { useHistory } from 'react-router-dom'
function About() {
    const history=useHistory()
    const [userData,setUserData]=useState({});
        const Aboutpage= async()=>{
    try {
        const res= await fetch("/about",{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "content-type":"application/json",
            },
            credentials:"include"
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
        history.push("/login");
    }
        }
        useEffect(() => {
            Aboutpage();
        }, [])
return (
    <>
        {/* creating my personal info using the cards */}
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>About Me</h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-box"><img src={Personal} alt="" /></div>
                                <p class="testimonial">I am a B.tech E.E.E student at NIT puducherry.I completed my 12th from Srichaitanya junior college</p>
                                <p class="overview"><b>Saivivek</b>MERN stack developer at <a href="#">NIT puducherry</a></p>
                                <div class="star-rating">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src={Mern} alt="" /></div>
                                <p class="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
                                <p class="overview"><b>Saivivek</b>MERN stack developer at  <a href="#">NIT puducherry</a></p>
                                <div class="star-rating">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box"><img src={Nit} alt="" /></div>
                                <p class="testimonial">I have graduated from national institute of technology puducherry</p>
                                <p class="overview"><b>Saivivek</b>Mernstack developer</p>
                                <div class="star-rating">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                        <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                {/* creating the complete info block*/}
                <div className="col-md-4">
                    <div className="mt-4">
                        <h5 >
                            {userData.name}
                        </h5>
                        <h6>
                        {userData.work}
                        </h6>
                    </div>
                    {/* creating a link for about */}
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#home" id="home-tab" data-toggle="tab" role="tab">About</a>
                        </li>
                    </ul>
                    {/* creating the info under about*/}
                    <div className="tab-pane fade show active mt-5" id="home" role="tabpanel" aria-aria-labelledby="home-tab">
                        <div className="row ">
                            <div className="col-md-6 ">
                                <label>user id</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData._id}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 ">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.name}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 ">
                                <label>email</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.email}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 ">
                                <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.phone}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 ">
                                <label>Profession</label>
                            </div>
                            <div className="col-md-6">
                                <p>{userData.work}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mt-5 ">
                    <input type="text" className="form-control" value="edit profile" name="btnAddMore" />
                </div>
            </div>
        </div>

    </>
)
}
export default About