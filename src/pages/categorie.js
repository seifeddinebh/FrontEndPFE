
import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Menu from "./menu";
import Footer from "./footer";
import CategorieService from "../services/CategorieService";
import { Link } from "react-router-dom";


function Categorie() {

    const [categories, setCategories] = useState([])

    const CS = new CategorieService();

    //useEffect( ()=>{},[])

    useEffect(() => {

        CS.getAll().then((res) => {

            console.log("Liste des categorie ", res.data.data)
            setCategories(res.data.data)
        })

    }, [])
    return (

        <body>

            {/* <Loader /> */}

            <Menu />

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Shop</h3>
                            <span className="breadcrumb"><a href="#">Home</a>Categorie</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Show All</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".adv">Adventure</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".str">Strategy</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".rac">Racing</a>
                        </li>
                    </ul>
                    <div className="row trending-box">


                        {categories.map((categorie) => (// categorie = i dans la boucle for
                            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                                <div className="item">
                                    <div className="thumb">
                                        <Link href="product-details.html">
                                            <img src={`http://localhost:3000/storages/${categorie.photo}`} alt="" />

                                        </Link>
                                        <span className="price"><em>$36</em>${categorie.budget}</span>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{categorie.name}</span>
                                        <h4>{categorie.description}</h4>
                                        {/* <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a> */}
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><a href="#"> &lt; </a></li>
                                <li><a href="#">1</a></li>
                                <li><a className="is_active" href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"> &gt; </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/isotope.min.js"></script>
            <script src="assets/js/owl-carousel.js"></script>
            <script src="assets/js/counter.js"></script>
            <script src="assets/js/custom.js"></script>

        </body>
    )
}

export default Categorie