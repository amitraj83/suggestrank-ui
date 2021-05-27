import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
      <div className="footer pt-4">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      <div className="footer-logo mb-4">
                          <img className="" src="image/footer-logo.png"/>
                      </div>
                      <div className="row">
                          <div className="col-md-6 mt-3">
                              <div className="footer-section">
                                  <div className="footer-section-title text-uppercase">
                                      <h5 className="mb-3">Quicklinks</h5>
                                  </div>
                                  <div className="footer-section-links">
                                      <a className="footer-link d-block mt-2" href="#">Home</a>
                                      <a className="footer-link d-block mt-2" href="#">Abous Us</a>
                                      <a className="footer-link d-block mt-2" href="#">Blogs</a>
                                      <a className="footer-link d-block mt-2" href="#">Terms of Service</a>
                                      <a className="footer-link d-block mt-2" href="#">Pricy & Policies</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 mt-3">
                              <div className="footer-section">
                                  <div className="footer-section-title text-uppercase">
                                      <h5 className="mb-3">Newsletter</h5>
                                  </div>
                                  <p className="text-white fs-7">Nulla facilisis, massa a gravida porta, massa felis tincidunt 
                                      nulla, a ultricies neque massa nec massa. Fusce a turpis in 
                                      elit mattis lobortis. Nunc nec consequat tortor.</p>

                                  <div className="row">
                                      <div className="col-md-8 mb-2">
                                          <input className="form-control form-control-sm fs-7" placeholder="Email address"/>
                                      </div>
                                      <div className="col-md-4 mb-2">
                                          <button className="btn-compare d-block">Compare</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="contact">
                          <div className="contact-item mb-3">
                              <h6 className="mb-0">Contact us at</h6>
                              <h4 className="fw-bold">1800-000-0000</h4>
                          </div>

                          <div className="contact-item mb-3">
                              <h6 className="mb-0">Mail us at</h6>
                              <h4 className="fw-bold">info@suggestrank.com</h4>
                          </div>

                          <div className="contact-item mb-3">
                              <h6 className="mb-2">Follow us on</h6>
                              <div className="footer-social-icons">
                                  <i className="fab fa-facebook"></i>
                                  <i className="fab fa-twitter"></i>
                                  <i className="fab fa-youtube"></i>
                                  <i className="fab fa-instagram"></i>
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
                              <p className="mb-0 fw-bold">Copyright @ Suggest Rank 2021 | All Right Reserved.</p>
                              <p className="mb-0 fs-7 d-lg-none">Website by: Symlink Technologies LLP</p>
                          </div>
                      </div>
                      <div className="col-md-6 d-none d-lg-block">
                          <div className="writter text-end">
                              <p className="mb-0 fs-7">Website by: Symlink Technologies LLP</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}