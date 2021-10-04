import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = async (e) => {
        e.preventDefault()
        const res = await fetch("/signin", {
            method: 'POST',
            headers:{
                "content-type": "application/json"
            }, body: JSON.stringify({
                email,
                password
            })
        })
        console.log(res);
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("invalid credentials")
        }
        else {
            window.alert("login sucessful");
            history.push("/")
        }
    }
    return (


        <>
            <div class="login-form">
                <form>
                    <h2 class="text-center">Log in</h2>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <span class="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="email" class="form-control" name="email" placeholder="email" autoComplete="off" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" class="form-control" name="password" placeholder="Password" autoComplete="off" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary login-btn btn-block" name="sigin" value="log in" onClick={loginUser}>Log in</button>
                    </div>
                    <div class="or-seperator"><i>or</i></div>
                    <p class="text-center">Login with your social media account</p>
                    <div class="text-center social-btn">
                        <NavLink to="/" class="btn btn-secondary"><i class="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                        <NavLink to="/" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                        <NavLink to="/" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</NavLink>
                    </div>
                </form>
                <p class="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
            </div>
        </>
    )
}

export default Login