import React, { useState } from 'react'
import NavbarProf from './NavbarProf'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import HomeProf from '../Pages/HomeProf';
import AppChat from '../Pages/Chat/AppChat';
import AppProf from '../Pages/boletimProf/AppProf';

const Hero = ({ handleLogout }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <section className="hero">
            <Router>
                <nav>
                    <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />

                    <button onClick={handleLogout}>Logout</button>
                </nav>
                    <NavbarProf show={showNav} />
                

                <div className="MainHero">
                <Route path="/HomeProf" component={HomeProf} />
                <Route path="/AppChat" component={AppChat} />
                <Route path="/AppProf" component={AppProf} />
                </div>
            </Router>
        </section>
    )
}

export default Hero;