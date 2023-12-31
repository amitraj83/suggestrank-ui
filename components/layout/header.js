import React, { Component } from 'react';
import { useRouter } from 'next/router'

function Header (props) {
// export default class Header extends Component {
    const router = useRouter();
    const onCompareClick =  (e) => {
        e.preventDefault();
        
        router.push("/compare/cars");
    }
    return (
        <div className="header">
            <div className="top-header">
                <div className="container">
                    <div className="h-left">
                        
                        <div className="h-item d-lg-inline-block d-none">
                            <i className="fas fa-envelope"></i>
                            <span>&nbsp;suggestrank@gmail.com</span>
                        </div>
                    </div>
                    <div className="h-right">
                        <span>Follow us on</span>
                        <a style={{color:"white"}} href="https://www.facebook.com/suggestrank"><img src={require('../../public/image/facebook.svg')} alt="SuggestRank facebook" style={{marginRight:"5px"}}/></a>
                        <a style={{color:"white"}} href="https://twitter.com/RankSuggest"><img src={require('../../public/image/twitter.svg')} alt="SuggestRank Twitter" style={{marginRight:"5px"}}/></a>
                        <a style={{color:"white"}} href="https://www.youtube.com/channel/UCeDWw9Kj-NfyPGBVwhOP1Hw/about"><img src={require('../../public/image/youtube.svg')} alt="SuggestRank Youtube" style={{marginRight:"5px"}}/></a>
                        
                    </div>
                </div>
            </div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg bg-light sticky-top">
                    <div className="container">
                        <div className="d-flex flex-grow-1">
                            <picture>
                                <source className="logo" srcSet={require('../../public/image/logo.png?webp')} type="image/webp" />
                                <source className="logo" srcSet={require('../../public/image/logo.png')} type="image/png"/>
                                <img className="logo" src={require('../../public/image/logo.png')} width="100%" height="70%" alt="SuggestRank"/>
                            </picture>
                            <div className="w-100 text-end">
                                <button aria-label="Open Menu" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                                    <img src={require('../../public/image/align-justify.svg')} width="40px" height="30px" alt="Menu"/>
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                            <ul className="navbar-nav ms-auto flex-nowrap">
                                <li className="nav-item">
                                    <a href="/" className="nav-link m-2 menu-item nav-active">Home</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#" className="nav-link m-2 menu-item">About Us</a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="/blog/" className="nav-link m-2 menu-item">Blog</a>
                                </li>
                                <li className="nav-item btn-wrapper">
                                    <button onClick={onCompareClick} className="btn-compare">Compare</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
  
}

export default Header;