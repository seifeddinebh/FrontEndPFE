
import Footer from "./footer";
import Menu from "./menu";
import Loader from "./loader";
import React, { useEffect, useState } from "react";
import CategorieService from "../services/CategorieService";

import EventService from "../services/EventService";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const [events, setEvents] = useState([])// tableau   
    const ES = new EventService();

    const [categories, setCategories] = useState([])
    const CS = new CategorieService();

    const navigate = useNavigate();


    useEffect(() => {

        ES.getAll().then((res) => {

            console.log("Liste des evenements ", res.data.data);
            setEvents(res.data.data);

        })
        CS.getAll().then((res) => {

            console.log("Liste des categorie ", res.data.data)
            setCategories(res.data.data)
        })

    }, [])
    const viewDetailsfunction = (id) => {
        alert("Details")
        //navigation vers la page eventdaetail/id
        navigate("/eventDetails/" + id, { state: { id: id } })
    }


    return (



        <body>

            {/* <!-- ***** Preloader Start ***** --> */}
            {/* <Loader /> */}
            {/* <!-- ***** Preloader End ***** -->

            <!-- ***** Header Area Start ***** --> */}
            <Menu />
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>Welcome to lugx</h6>
                                <h2>BEST GAMING SITE EVER!</h2>
                                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <button role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src="assets/images/Evenement_Home_Page.jpg" alt=""></img>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Top</h6>
                                <h2>Events</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/evenement">View All</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="assets/images/Sport_Event.jpg" style={{ width: 350, height: 460 }} alt=""></img>

                                </div>
                                <div className="down-content">

                                    <h4>Top1</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="assets/images/Evenement_Clturel.jpg" style={{ width: 350, height: 460 }} alt=""></img>

                                </div>
                                <div className="down-content">

                                    <h4>Top2</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="assets/images/Sciences_Event.jpg" style={{ width: 300, height: 460 }} alt=""></img>

                                </div>
                                <div className="down-content">

                                    <h4>Top3</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="assets/images/Camping_Events.jpg" style={{ width: 350, height: 460 }} alt=""></img>

                                </div>
                                <div className="down-content">

                                    <h4>Top4</h4>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section most-played">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>List </h6>
                                <h2>Events</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/evenement">View All</Link>
                            </div>
                        </div>

                        {events.map((oneEvent) => (
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="item">
                                    <div className="thumb">
                                        <a href="product-details.html">
                                            <img src={`http://localhost:3000/storages/${oneEvent.photo}`} style={{ width: 150, height: 250 }}


                                                alt=""></img></a>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{oneEvent.name}</span>
                                        <h4>{oneEvent.localisation}</h4>
                                        <a onClick={(e) => viewDetailsfunction(oneEvent._id)}>Details</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="section categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-heading">
                                <h6>Categories</h6>
                                <h2>Top Categories</h2>
                            </div>
                        </div>

                        {categories.map((oneCat) => (<div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>{oneCat.name}</h4>
                                <div className="thumb">
                                    <a href="product-details.html">

                                        {/* <img src="assets/images/categories-05.jpg" alt=""></img> */}
                                        <img src={`http://localhost:3000/storages/${oneCat.photo}`} style={{ width: 150, height: 250, borderRadius: 25 }}


                                            alt=""></img>


                                    </a>
                                </div>
                            </div>
                        </div>)



                        )}


                    </div>
                </div>
            </div>

            <div className="section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>Top Organizer</h6>

                                        </div>

                                        <div className="main-button">
                                            <img src={"assets/images/Organiser_img 2.jpg"} style={{ width: 400, height: 400, borderRadius: 200 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 align-self-end">
                            <div className="subscribe">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>Top Organizer</h6>

                                        </div>
                                        <div className="search-input">
                                            <img src={"assets/images/Organiser_img.jpg"} style={{ width: 400, height: 400, borderRadius: 200 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </body>
    )

}

export default Home 