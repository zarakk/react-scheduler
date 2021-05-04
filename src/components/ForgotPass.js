import React from "react";
import {Switch, BrowserRouter, Link ,Route} from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect, useRef } from "react/cjs/react.development";
import '../App.css'
import '../index.css'
import {TweenMax, Power3} from 'gsap';


const ForgotPass = ({Login, error})=>{
    const [details, setDetails] = useState({email:"", password:""})
    const submitHandler = e=>{
        e.preventDefault();
        console.log(details);
    }
    const ref = useRef(null)
    let item = ref;
    
    useEffect(()=>{
        console.log(item);
        TweenMax.to(
            item,
            .8,
            {
                opacity: 1,
                y:-75,
                ease: Power3.easeOut
            }
        )
    }, [])
    return(
   <div className="App">
        <form ref={el=>{item=el}} onSubmit={submitHandler}>
                <div className="form-inner">
                    
                <h2>Forgot your password?</h2>
                <p>Enter your email address and we'll send you a link to reset your passowrd </p>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e=> setDetails({...details, email:e.target.value})} value={details.email}></input>
                </div>
              
                <input type="submit" value="Submit"></input>
               <p className="cancel-btn"> <Link to="/" >Cancel</Link>  </p>              
            </div>
            </form>
            <svg className="backgroundsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="0.75" d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,117.3C560,96,640,64,720,69.3C800,75,880,117,960,122.7C1040,128,1120,96,1200,90.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            </div>
    )
}
export default ForgotPass;