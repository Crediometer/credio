import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "../home-page/Home";
import Card from "../card/Card"

const Navbar = () => {
    return (
        <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
        </Routes>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Crediometer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-home-page" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active setup-guide">
                        <a class="nav-link" href="#">Setup Guide<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <i class="far fa-bell"></i>
                    </li>
                    <li class="nav-item">
                        <i class="fas fa-question"></i>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Micheal
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="sidebar"></div>
            <ul className="sidebar-items">
                <Link to="/">
                <li className="sidebar-item">
                    <i class="fas fa-home"></i>
                    <span className="sidebar-text current">Overview</span>
                </li>
                </Link>
                <Link to="/card">
                <li className="sidebar-item">
                    <i class="fas fa-credit-card"></i>
                    <span className="sidebar-text">Cards</span>
                </li>
                </Link>
                <li className="sidebar-item">
                    <i class="far fa-bookmark"></i>
                    <span className="sidebar-text">Transactions</span>
                </li>
                <li className="sidebar-item">
                    <i class="far fa-chart-bar"></i>
                    <span className="sidebar-text">Reports</span>
                </li>
                <li className="sidebar-item">
                    <i class="far fa-comment"></i>
                    <span className="sidebar-text">Chat</span>
                </li>
            </ul>

        </Router>
    )
}

export default Navbar;
