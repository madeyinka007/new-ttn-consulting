
function Headers() {
  return (
    <header class="header__area header__v2">
        <div class="container maxw_1640">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-3 col-md-6 col-7 left__border">
                    <div class="logo">
                        <a href="#"><img src="assets/img/logo/logo.svg" alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-10 col-lg-9 col-md-6 col-5">
                    <div class="menu__area">
                        <div class="main-menu">
                            <nav id="mobile-menu">
                            <ul>
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#process">Process</a></li>
                                <li><a href="#testimonial">Testimonial</a></li>
                                <li><a href="#clients">Clients</a></li>
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
                            <div class="button ml-60">
                                <a class="thm_btn" href="#contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Headers
