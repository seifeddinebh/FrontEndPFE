import React, { useState, useEffect } from "react";
import Menu from "./menu";
import Footer from "./footer";
import EventService from "../services/EventService";
import ReservationService from "../services/ReservationServices";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




function EventsDetails() {


    const ES = new EventService();
    const RS = new ReservationService()

    const location = useLocation()
    const navigate = useNavigate()


    const [id, setId] = useState("")
    const [category, setcategory] = useState("")
    const [description, setdescription] = useState("")
    const [equipement, setequipement] = useState([])
    const [name, setname] = useState("")
    const [organiser, setorganiser] = useState([])
    const [photo, setphoto] = useState("")
    const [price, setprice] = useState("")
    const [tags, settags] = useState([])
    const [emailOrganizer, setEmailOrganizer] = useState("")







    useEffect(() => {// Reexpliquer
        console.log("ok id ", location.state.id);
        setId(location.state.id);//??
        getUserById(location.state.id);//?? name(x) name(saif)
    }, []);




    

    const getUserById = (id) => {
        ES.GetOne(id).then((res) => {
            console.log("detais of events", res.data);
            setcategory(res.data.data.category);
            setdescription(res.data.data.description);
            setequipement(res.data.data.equipement);
            setname(res.data.data.name);


            setphoto(res.data.data.photo);
            setprice(res.data.data.price);
            settags(res.data.data.tags);
            if (res.data.data.organizer != null) {
                setorganiser(res.data.data.organizer);
                //  setEmailOrganizer(res.data.data.organiser.email);
                console.log("***email", res.data.data.organizer.email)
            }

        });
    };



    const res = (e) => {// e
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be reserve this event!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reserve it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var IdClient = localStorage.getItem("resultID");// localstorage et les 2 lignes de const data

                const data = { // data
                    "idClient": IdClient,
                    "idEvent": id//setId(location.state.id)
                }

                //   console.log("****data reservation**", data);
                Swal.fire(
                    'Reserved!',
                    'Your reservation is created.please check your email',
                    'success'
                )
                RS.create(data).then((res) => {
                    console.log(res.data);

                })


            }
            navigate("/contact")
        })
    }


    return (
        <div>
            <Menu />

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Event {name}'s details</h3>
                            <span className="breadcrumb">  More information</span>
                        </div>
                    </div>
                </div>
            </div>

           


            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={`http://localhost:3000/storages/${photo}`} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>{name}</h4>
                            <span className="price"><em>$28</em> ${price}</span>
                            <p>{description}</p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id="1" aria-describedby="quantity" placeholder="1" />
                                <button type="submit" onClick={(e) => res(e)}><i className="fa fa-shopping-bag"></i> Reservation</button>
                                {/* e (event) Questionneer */}

                            </form>
                            <ul>
                                <li><span>Category:</span> {category.name}</li>
                                <li><span>Organiser:</span> {organiser.firstname},{organiser.phone},{organiser.email}</li>
                                <li><span>Equipement:</span> {equipement.map((eqp) => <div>{eqp}</div>)}</li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews (3)</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                            <p>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
                                            <br />
                                            <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
                                        </div>
                                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                            <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal.
                                                PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica
                                                jean shorts edison bulb poutine next level humblebrag la croix adaptogen.</p>
                                            <br></br><p>Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy.
                                                Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw
                                                denim chillwave tousled try-hard succulents street art.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section categories related-games">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">

                                <h2>Tags</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <a>Reserver </a>



                            </div>

                        </div>

                        {tags.map((T1) => (
                            <div className="col-lg col-sm-6 col-xs-12">
                                <div className="item">
                                    <h4>{T1}</h4>
                                    <div className="thumb">
                                        <a href="product-details.html"><img src="assets/images/categories-01.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </div>
            < Footer />

        </div>
    )


}

export default EventsDetails