import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Menu from "./menu";
import Footer from "./footer";
import EventService from "../services/EventService";
import { Link, useNavigate } from "react-router-dom";



function Evenement() {
    const [query, setquery] = useState("")

    const [events, setEvents] = useState([])// tableau   
    // const [name,setName]=useState("")

    const ES = new EventService();
    const navigate = useNavigate();//pour la navigation entre les page react

    //useEffect( ()=>{},[])

    useEffect(() => {

        ES.getAll().then((res) => {

            console.log("Liste des evenements ", res.data.data);
            setEvents(res.data.data);

        })

    }, [])

    const Recherche = (e) => {


    }

    const viewDetailsfunction = (id) => {
        alert("bonjour")
        //navigation vers la page eventdaetail/id
        navigate("/eventDetails/" + id, { state: { id: id } })
    }

    return (


        <body>

            {/* <Loader /> */}

            <Menu />

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Shop</h3>
                            <span className="breadcrumb"><a href="#">Home</a>Evenement</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">

                    <ul className="trending-filter">

                        <input type="name"
                            name="name" id="name"
                            placeholder='search' onChange={(event) => setquery(event.target.value)}
                            style={{ backgroundColor: "white", borderRadius: "30%" }}
                        />



                        {/* <li>
                            <a className="is_active" href="#!" data-filter="*">Recherche</a>
                        </li> */}
                        {/* <li>
                            <a href="#!" data-filter=".adv">Adventure</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".str">Strategy</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".rac">Racing</a>
                        </li> */}
                    </ul>








                    <div className="row trending-box">


                        {events
                        
                        .filter((event)=>{
                        if(query==""){return event;}
                        else if(event.name.toLowerCase().includes(query.toLowerCase())){
                            return event
                        }
                        }
                        )
                        
                        
                        
                        .map((event) => (
                            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                                <div className="item">
                                    <div className="thumb">
                                        <Link href="product-details.html">
                                            <img src={`http://localhost:3000/storages/${event.photo}`} alt="" />
                                        </Link>
                                        <span className="price"><em>$36</em>${event.price}</span>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{event.name}</span>
                                        <h4>{event.description}</h4>

                                        <i className="fa fa-shopping-bag" onClick={(e) => viewDetailsfunction(event._id)}></i>

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
export default Evenement