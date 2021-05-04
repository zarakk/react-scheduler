import React from "react";
import { useState, useEffect, useRef } from "react/cjs/react.development";
import ReCAPTCHA from "react-google-recaptcha";
import PasswordStrengthBar from 'react-password-strength-bar';
import { GoogleLogout } from 'react-google-login';
import { GoogleLogin } from 'react-google-login'
import { useGoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import logo from '../communityai.png'
import '../App.css'
import '../index.css'
import {TweenMax, Power3} from 'gsap';
import signuplogo from '../und3.png'

import signuplogotwo from '../und4.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//const { password } = this.state;
// const { signIn, loaded } = useGoogleLogin({
//     onSuccess,
//     onAutoLoadFinished,
//     clientId,
//     cookiePolicy,
//     loginHint,
//     hostedDomain,
//     autoLoad,
//     isSignedIn,
//     fetchBasicProfile,
//     redirectUri,
//     discoveryDocs,
//     onFailure,
//     uxMode,
//     scope,
//     accessType,
//     responseType,
//     jsSrc,
//     onRequest,
//     prompt
//   })
const responseFacebook = (response) => {
    console.log(response);
  }
const responseGoogle = ()=>{
    console.log(responseGoogle)
}
function onChange(value) {
  console.log("Captcha value:", value);
}

const LoginForm = ({Login, error})=>{
    const [details, setDetails] = useState({name:"", email:"", password:""})
    const submitHandler = e=>{
        e.preventDefault();
        Login(details);
    }
    const ref = useRef(null)
    let item = ref;
    let items = ref;
    useEffect(()=>{
        console.log(item);
        TweenMax.to(
            item,
            .8,
            {
                opacity: 1,
                y:-15,
                ease: Power3.easeOut
            }
        )
    }, [])
    return(
   <div className="App">
        <form ref={el=>{item=el}} onSubmit={submitHandler}>
                <div className="form-inner">
                <img className="logo" src={logo}/>    

                <h2>Signup</h2>
                <p className="account">Already have an account? <Link to="/">Login</Link></p>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e=> setDetails({...details, name:e.target.value})} value={details.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e=> setDetails({...details, email:e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group p">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=> setDetails({...details, password:e.target.value})} value={details.password}></input>
                    <PasswordStrengthBar  className="password-strength" password={details.password} />
                </div>
                
                <ReCAPTCHA class="recaptcha" sitekey="6Ld3gJ4aAAAAAMrgmZEn3i8O8BeLfGJpCDAyUQeu" onChange={onChange}/>
                <input className="signup-btn" type="submit" value="Login"></input>
                <div className="separator">OR</div>
               <div className="gf">
                <GoogleLogin
                    clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                    onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                        >
    <span> Login with Google</span>
  </GoogleLogin>
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    //onClick={componentClicked}
    callback={responseFacebook} />
            </div>
            </div>
            </form>
            <img className="signuplogo" src={signuplogo}></img>
  <img className="signuplogotwo" src={signuplogotwo}></img>
            <svg ref={elz=>{items=elz}} className="backgroundsvg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="0.75" d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,117.3C560,96,640,64,720,69.3C800,75,880,117,960,122.7C1040,128,1120,96,1200,90.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            </div>
    )
}
export default LoginForm;