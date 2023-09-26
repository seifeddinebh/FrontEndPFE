import React from "react";


function SignIn() {


    return (



        <div className="contact-page section">
            <div className="container">
             
                <div className="col-lg-6">
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
                                                <input type="name" name="name" id="name" placeholder="Your First Name..." autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="surname" name="surname" id="surname" placeholder="Your Last Name..." autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject" name="subject" id="subject" placeholder="Your Password..." autocomplete="on" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject" name="subject" id="subject" placeholder="Your CIN..." autocomplete="on" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="subject" name="subject" id="subject" placeholder="Your Phone..." autocomplete="on" />
                                            </fieldset>
                                        </div>
                                        {/* <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                            </fieldset>
                                        </div> */}
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="orange-button">Sign In</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn