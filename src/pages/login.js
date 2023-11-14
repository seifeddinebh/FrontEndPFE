import React, { useState, useEffect } from "react";
import Footer from "./footer";
//import UserService from "../services/UserService";
import LoginService from "../services/LoginService";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    //const US = new UserService()
    const LS = new LoginService()
    const navigate = useNavigate()

    const LoginFunction = (e) => {
        e.preventDefault();

        const data = { //?? mnin yjib fel email w PWD
            email: email,
            password: password
        }
        var resultToken;

        console.log(data);
        LS.Login(data).then((res) => {
            if (res.status != 200) { navigate("/notfound") }
            // console.log("*******token******", res.data.message.token)
            console.log("*******res.data.message.user._id******", res.data.message.user._id)
            if (res.data.message.token != null) { // pour koi ces 2 instructions
                resultToken = res.data.message.token;
                localStorage.setItem("resultID", res.data.message.user._id);// cha3malna behom resultID
                localStorage.setItem("resultToken", res.data.message.token);// cha3malna behom tesultToken
                //  alert(resultID);
                navigate("/")
            }
            //code 
            else { navigate("/notfound") }
        })



    }
    return (



        <div className="contact-page section">
            <div className="container">

                <div className="col-lg-8 offset-4">
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