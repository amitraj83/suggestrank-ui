import React, { Component } from 'react';

export default class Header extends Component {
  render () {
    return (
        <div className="header">
            <div className="top-header">
                <div className="container">
                    <div className="h-left">
                        <div className="h-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>1800-000-0000</span>
                        </div>
                        <div className="h-item d-lg-inline-block d-none">
                            <i className="fas fa-envelope"></i>
                            <span>info@suggestrank.com</span>
                        </div>
                    </div>
                    <div className="h-right">
                        <span>Follow us on</span>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg bg-light sticky-top">
                    <div className="container">
                        <div className="d-flex flex-grow-1">
                            <img className="logo" src="image/logo.png"/>
                            <div className="w-100 text-end">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                                    <i class="far fa-bars"></i>
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                            <ul className="navbar-nav ms-auto flex-nowrap">
                                <li className="nav-item">
                                    <a href="#" className="nav-link m-2 menu-item nav-active">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link m-2 menu-item">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link m-2 menu-item">Blog</a>
                                </li>
                                <li className="nav-item btn-wrapper">
                                    <button className="btn-compare">Compare</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
  }
}