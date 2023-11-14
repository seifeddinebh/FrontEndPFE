import React from "react";
import { Link } from "react-router-dom";

function Menu() {


    return (

        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <Link to="index.html" className="logo">
                                <img src="assets/images/logo.png" alt="" style={{ width: 158 }}></img>
                            </Link>
                            {/* <!-- ***** Logo End ***** -->
                                <!-- ***** Menu Start ***** --> */}
                            <ul className="nav">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/evenement">Events</Link></li>
                                <li><Link to="/categorie">Categorie</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/profile">Profile</Link>
                                </li>
                                <li><Link to="/signin">Sign In</Link></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu