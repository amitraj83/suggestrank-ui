import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div className="footer pt-4">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      <div className="footer-logo mb-4">
                          <picture>
                          <source  srcSet={require('../../public/image/footer-logo.png?webp')} type='image/webp'/>
                          <source  srcSet={require('../../public/image/footer-logo.png')} type='image/png'/>
                          <img  src={require('../../public/image/footer-logo.png')}/>
                          </picture>
                      </div>
                      <div className="row">
                          <div className="col-md-6 mt-3">
                              <div className="footer-section">
                                  <div className="footer-section-title text-uppercase">
                                      <h5 className="mb-3">Quicklinks</h5>
                                  </div>
                                  <div className="footer-section-links">
                                      <a className="footer-link d-block mt-2" href="/">Home</a>
                                      <a className="footer-link d-block mt-2" href="/blog/">Blogs</a>
                                      <a className="footer-link d-block mt-2" href="/terms.html">Terms of Service</a>
                                      <a className="footer-link d-block mt-2" href="/privacy-policy.html">Privacy & Policies</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 mt-3">
                              <div className="footer-section">
                                  <div className="footer-section-title text-uppercase">
                                      <h5 className="mb-3">Newsletter</h5>
                                  </div>
                                  <p className="text-white fs-7">Join our newsletter to be informed about our latest car comparisons and new cars specs details. </p>

                                  <div className="row">
                                      <div className="col-md-8 mb-2">
                                          <input className="form-control form-control-sm fs-7" placeholder="Email address"/>
                                      </div>
                                      <div className="col-md-4 mb-2">
                                          <button className="btn-compare d-block">Join</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="contact">
                          <div className="contact-item mb-3">
                              {/* <h6 className="mb-0">Contact us at</h6>
                              <h4 className="fw-bold">1800-000-0000</h4> */}
                          </div>

                          <div className="contact-item mb-3">
                              <h6 className="mb-0">Mail us at</h6>
                              <h4 className="fw-bold">suggestrank@gmail.com</h4>
                          </div>

                          <div className="contact-item mb-3">
                              <h6 className="mb-2">Follow us on</h6>
                              <div className="footer-social-icons">
                                  <a style={{color:"#14213d"}} href="https://www.facebook.com/suggestrank"><i className="fab fa-facebook"></i></a>
                                  <a style={{color:"#14213d"}} href="https://twitter.com/RankSuggest"><i className="fab fa-twitter"></i></a>
                                  <a style={{color:"#14213d"}} href="https://www.youtube.com/channel/UCeDWw9Kj-NfyPGBVwhOP1Hw/about"><i className="fab fa-youtube"></i></a>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-bottom mt-5">
              <div className="left-background d-none d-lg-block"></div>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="copyright">
                              <p className="mb-0 fw-bold">Copyright @ SuggestRank 2021 | All Right Reserved.</p>
                              
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
    );
  }
}