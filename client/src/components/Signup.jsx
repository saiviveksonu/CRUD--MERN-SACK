import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
function Signup() {
    let history = useHistory();
    // declaring the user state hook
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value;
    const handelInputs = (e) => {
        // storing the input field name in the name variable 
        name = e.target.name;
        // storing the input field value in the value variable
        value = e.target.value;
        // using the spread operator to get the user object  inside the setuser and setting the state
        setUser({ ...user, [name]: value })
        e.preventDefault();
    }
    const postData = async (event) => {
        event.preventDefault();
        const { name, email, phone, work, password, cpassword } = user
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            });
            const data = await res.json();
            console.log(`${data}`)
            console.log(res);
            if (data.status===422){
                window.alert("invalid submission")
                console.log("invalid submission");
            }
            else {
                window.alert("sucessful");
                console.log("sucessfull")
                history.push("/login");
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div class="signup-form">
                <form >
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="name" placeholder="name" value={user.name} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" value={user.email} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-phone"></i>
                                </span>
                            </div>
                            <input type="number" className="form-control" name="phone" placeholder="Phone Number" value={user.phone} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-briefcase"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="work" placeholder="Your Profession" value={user.work} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="password" placeholder="Password" value={user.password} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                    <i className="fa fa-check"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" value={user.cpassword} onChange={handelInputs} autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg" name="signup" value="register" onClick={postData}>Sign Up</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>
            </div>

        </>
    )
}
export default Signup