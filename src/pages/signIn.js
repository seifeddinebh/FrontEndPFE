import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";





function SignIn() {


    const US = new UserService()
    const navigate = useNavigate()





    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [password, setpassword] = useState("")
    const [adress, setadress] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [cin, setcin] = useState("")
    const [role, setrole] = useState("")


    const [photo, setPhoto] = useState("")
    const onFileChange = event => {
        setPhoto(event.target.files[0]);
    };

    const photoF = (event) => {
        setPhoto(event.target.files[0]);
    }
    const SignInFunction = (e) => {
        e.preventDefault();

        const data = {

            firstname: firstname,
            lastname: firstname,
            email: email,
            password: password,
            adress: adress,
            phone: phone,
            cin: cin,
            role: role,

        }

        // alert(firstname)
        const formData = new FormData();
        formData.append("firstname", firstname)
        formData.append("lastname", lastname)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("photo", photo)
        formData.append("adress", adress)
        formData.append("phone", phone)
        formData.append("cin", cin)
        formData.append("role", role)


        console.log(formData)

        US.create(formData).then((res) => {
            // console.log(res.data)
        })
        navigate("/notfound")
    }

    return (



        <div className="contact-page section">
            <div className="container">

                <div className="col-lg-6 offset-3">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1> Sign In </h1>
                                <br></br>
                                <br></br>
                                <form id="contact-form" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="name"
                                                    name="name" id="name"
                                                    placeholder="Your First Name..."
                                                    autocomplete="on" required
                                                    value={firstname}
                                                    onChange={(e) => setfirstname(e.target.value)}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="surname"
                                                    name="surname"
                                                    id="surname"
                                                    placeholder="Your Last Name..."
                                                    autocomplete="on" required
                                                    value={lastname}
                                                    onChange={(e) => setlastname(e.target.value)}

                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text"
                                                    name="email"
                                                    id="email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    placeholder="Your E-mail..."
                                                    required=""
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}

                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Your Password..."
                                                    autocomplete="on"
                                                    required=""
                                                    value={password}
                                                    onChange={(e) => setpassword(e.target.value)} />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Your CIN..."
                                                    autocomplete="on"
                                                    required=""
                                                    value={cin}
                                                    onChange={(e) => setcin(e.target.value)}

                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Your Phone..."
                                                    autocomplete="on"
                                                    required=""
                                                    value={phone}
                                                    onChange={(e) => setphone(e.target.value)}


                                                />
                                            </fieldset>
                                        </div>

                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Your Adress..."
                                                    autocomplete="on"
                                                    required=""
                                                    value={adress}
                                                    onChange={(e) => setadress(e.target.value)}


                                                />
                                            </fieldset>
                                        </div>



                                        <div className="col-lg-6">
                                            <select class="form-select" aria-label="Default select example"
                                                value={role}
                                                onChange={(e) => setrole(e.target.value)}

                                            >
                                                <option selected>Choose a role</option>
                                                <option value="admin">Admin</option>
                                                <option value="client">Client</option>
                                            </select>

                                        </div>

                                        <br></br>

                                        <div className="col-lg-6">


                                            <div class="mb-3">
                                                <label for="formFile" class="form-label">Choisir une photo</label>
                                                <input class="form-control" type="file" id="formFile" />
                                            </div>

                                        </div>

                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button onClick={(e) => SignInFunction(e)} type="submit" id="form-submit" className="orange-button">Sign In</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                    </div>
                </div>

               
            </div>
            <Footer/>
        </div>
    )
}


export default SignIn