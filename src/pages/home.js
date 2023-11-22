import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import Loader from "./loader";
import { Link } from "react-router-dom";

function Home() {


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
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-01.jpg" alt=""></img></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-02.jpg" alt=""></img></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-03.jpg" alt=""></img></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-04.jpg" alt="" /></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-05.jpg" alt=""></img></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/top-game-06.jpg" alt=""></img></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Adventure</span>
                                    <h4>Assasin Creed</h4>
                                    <a href="product-details.html">Explore</a>
                                </div>
                            </div>
                        </div>
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
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-01.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-03.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-04.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
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
                                            <h6>Our Shop</h6>
                                            <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                                        </div>
                                        <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                                        <div className="main-button">
                                            <a href="shop.html">Shop Now</a>
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
                                            <h6>NEWSLETTER</h6>
                                            <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                                        </div>
                                        <div className="search-input">
                                            <form id="subscribe" action="#">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..." />
                                                <button type="submit">Subscribe Now</button>
                                            </form>
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