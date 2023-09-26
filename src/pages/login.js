import React, { useState, useEffect } from "react";
import Footer from "./footer";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const US = new UserService()
    const navigate = useNavigate()

    const LoginFunction = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
 var result;
        console.log(data);
        US.Login(data).then((res) => {
            if(res.status != 200) {navigate("/notfound")}
            console.log("*******token******",res.data.message.token)
            if (res.data.message.token !=null) { 
                result=res.data.message.token;
                
                navigate("/") }
                //code 
           else{navigate("/notfound")}
        })
       
       
     
    }
    return (



        <div className="contact-page section">
            <div className="container">

                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1> Login </h1>
                                <br></br>
                                <br></br>
                                <form id="contact-form" >
                                    <div className="row">

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="text"
                                                        name="email" id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        placeholder="Your E-mail..." required=""
                                                        value={email}
                                                        onChange={(e) => setemail(e.target.value)}

                                                    />
                                                </fieldset>
                                            </div>

                                        </div>

                                        <br></br>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="subject"
                                                        name="subject" id="subject" placeholder="Your Password..."
                                                        value={password}
                                                        // autocomplete="on"
                                                        onChange={(e) => setpassword(e.target.value)}

                                                    />
                                                </fieldset>
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button onClick={(e) => LoginFunction(e)} id="form-submit" className="orange-button">Login</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}


export default Login