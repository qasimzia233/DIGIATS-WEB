import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './HomeDashBoard.css'
import LogoLight from '../../assets/logo-light.png'
import LoadAnimation from '../../assets/waitting.json'
import lottie from 'lottie-web';
import Navbar_DashBoard from './Components/Navbar_DashBoard';

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import MyAgents from './Screens/MyAgents';




const Home = () => {


    return (

        <div>
            <Navbar_DashBoard />
            <div>
                <div className="row mt-5">
                    <div className="col-4">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav d-flex flex-column">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-8">
                        <h1>Main</h1>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Home

