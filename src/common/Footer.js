import React from 'react'

function Footer() {
  return (
    <footer class="footer__area footer__style--1">
            <div class="foooter__main">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="footer__widget">
                                <span class="title__sub"><i class="fas fa-envelope"></i>Send Us a Message</span>
                                <form class="contact__form" style={{marginTop:0}}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input_field">
                                                <input type="text" placeholder="Enter your name*" />
                                            </div>
                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="input_field">
                                                                <input type="email" placeholder="Enter your email*" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="input_field">
                                                                <input type="number" placeholder="Enter your  number*" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="input_field">
                                                                <input type="text" placeholder="Subject*" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="input_field">
                                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your Message*"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            {/* <div class="check_box check_box-2 d-flex justify-content-center mt-10 mb-30">
                                                                <input id="remember_btn" type="checkbox">
                                                                <label for="remember_btn">Save my name, email, and website in this browser for the next time I comment.</label>
                                                            </div> */}
                                                            <button class="thm_btn">submit Request</button>
                                                        </div>
                                                    </div>
                                                </form>
                            </div>
                            
                        </div>
                        <div class="col-lg-6">
                            <div class="widget__wrap">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-12 col-md-6 widget__border">
                                        <div class="footer__widget">
                                            <span class="title__sub"><i class="fas fa-map-marker-alt"></i>Locations</span>
                                            <h3 class="widget__title">Melbron, Australia</h3>
                                            <p>Australia, Badda Tangroad 1289 789034 Hotizilsite Australia</p>
                                            <p>Moday - Friday <br /> 10.00 AM - 07.00 PM</p>
                                            <h5 class="address"><i class="fas fa-map-marker-alt"></i>Badda, Tangroad</h5>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-12 col-md-6 widget__border">
                                        <div class="footer__widget">
                                            <span class="title__sub"><i class="fas fa-envelope"></i>Contact Info</span>
                                            <h3 class="widget__title">Tezzbax.web4.com</h3>
                                            <ul class="widget__info list-unstyled">
                                                <li>Ta-134/A, Gulshan Badda Link Rd, Dhaka, Bangladesh</li>
                                                <li><a href="tel:+88015569569365">(+880)155 69569 365</a></li>
                                                <li><a href="mailto:support@rstheme.com">support@rstheme.com</a></li>
                                                <li>Office Hours: 8AM - 11PM</li>
                                                <li>Sunday - Wekend Day</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom pt-60 pb-60">
                <div class="container">
                    <div class="row align-items-center mt-none-15">
                        <div class="col-lg-3 col-md-3 mt-15">
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 mt-15">
                           <ul class="footer__nav ul_li_right">
                               <li><a href="#!">How it works? </a></li>
                               <li><a href="#!">pricing</a></li>
                               <li><a href="#!">Our Clients</a></li>
                               <li><a href="#!">Faq</a></li>
                               <li><a href="#!">Help Center</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
