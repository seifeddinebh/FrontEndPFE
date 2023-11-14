import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Loader from './pages/loader';
import Menu from './pages/menu';
import SignIn from './pages/signIn';
import Evenement from './pages/evenement';
import Categorie from './pages/categorie';
import EventsDetails from './pages/eventsDetails';
import Login from './pages/login';
import NotFound from './pages/notfound';
import Profile from './pages/profile';
import UpDate from './pages/update';



function App() {
  return (

    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/eventdetails/:id" element={<EventsDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update/:id" element={<UpDate />} />



        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
