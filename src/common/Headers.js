
function Headers() {
  return (
    <header class="header__area header__v2">
    <div class="container maxw_1640">
        <div class="row align-items-center">
            <div class="col-xl-2 col-lg-3 col-md-6 col-7 left__border">
                <div class="logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
            </div>
            <div class="col-xl-10 col-lg-9 col-md-6 col-5">
                <div class="menu__area">
                    <div class="main-menu">
                        <nav id="mobile-menu">
                          <ul>
                            <li className="active"><a href="#!">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#!">Services</a></li>
                            <li><a href="#!">Process</a></li>
                            <li><a href="#!">Testimonial</a></li>
                            <li><a href="#!">Clients</a></li>
                          </ul>
                        </nav>
                    </div>
                    <div class="side-menu-icon d-lg-none">
                        <button class="side-toggle"><i class="far fa-bars"></i></button>
                    </div>
                    <div class="side-mobile-menu">
                        <button class="side-info-close"><i class="fal fa-times"></i></button>
                        <div class="mobile-menu"></div>
                    </div>
                    <div class="offcanvas-overlay"></div>
                    <div class="menu__area--right ul_li">
                        {/* <div class="language__wrap">
                            <ul>
                                <li><a href="#!" class="lang_btn">EN <i class="far fa-arrow-down"></i></a>
                                    <ul class="lang_sub_list">
                                        <li><a href="#0">Bangla</a></li>
                                        <li><a href="#0">Arabic</a></li> 
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        <div class="button ml-60">
                            <a class="thm_btn" href="contact.html">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
        // <header className="header__area header__v2">
        //     <div className="container maxw_1640">
        //         <div className="row align-items-center">
        //             <div className="col-xl-2 col-lg-3 col-md-6 col-7 left__border">
        //                 <div className="logo">
        //                     <a href="index.html"><img src="assets/img/logo/logo.png" alt="ttn-logo" /></a>
        //                 </div>
        //             </div>
        //             <div className="col-xl-10 col-lg-9 col-md-6 col-5">
        //                 <div className="menu__area">
        //                     <div className="main-menu">
        //                         <nav id="mobile-menu">
        //                             <ul>
        //                                 <li className="active"><a href="#!">Home</a></li>
        //                                 <li><a href="#!">About Us</a></li>
        //                                 <li><a href="#!">Services</a></li>
        //                                 <li><a href="#!">Process</a></li>
        //                                 <li><a href="#!">Testimonial</a></li>
        //                                 <li><a href="#!">Clients</a></li>
        //                             </ul>
        //                         </nav>
        //                     </div>
        //                     <div className="side-menu-icon d-lg-none">
        //                         <button className="side-toggle"><i className="far fa-bars"></i></button>
        //                     </div>
        //                     <div className="side-mobile-menu">
        //                         <button className="side-info-close"><i className="fal fa-times"></i></button>
        //                         <div className="mobile-menu"></div>
        //                     </div>
        //                     <div className="offcanvas-overlay"></div>
        //                     <div className="menu__area--right ul_li">
        //                         <div className="button ml-60">
        //                             <a className="thm_btn" href="contact.html">Contact Us</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
  )
}

export default Headers
