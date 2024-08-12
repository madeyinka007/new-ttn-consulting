import React from 'react'

function About() {
  return (
        <>
            <section class="services__area pt-120" id="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="experience__box bg__radius">
                                <h1 class="big__text pos-rel">
                                    <span class="big__text--stock">28</span>
                                    <span class="big__text--fill">28</span>
                                </h1>
                                <h5 class="title">Year of experience</h5>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="services__content mt-30 pl-90">
                                <div class="sec__title mb-30">
                                    <span class="sub__title"><i class="fas fa-star"></i>Our Story</span>
                                    <h2 class="title mb-25">Professional HR service for businesses across Africa</h2>
                                    <p>We are experts in - enabling businesses and individuals, realize their full potentials. We do this by providing organizations with access to the most valuable talents available and helping individuals achieve their desired standard of living.</p>
                                    <p>Our commitment is to make sure that we match the most qualified talent to our clients and build lasting relationships along the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="features__area pt-120">
                <div class="container">
                    <div class="row justify-content-center mt-none-30">
                        <div class="col-lg-4 col-md-6">
                            <div class="features__single mt-30">
                                <div class="features__head mb-40 ul_li_between">
                                    <div class="feat__icon">
                                        <img src="assets/img/icon/feat_01.png" alt="" />
                                    </div>
                                    <span class="feat__number">01</span>
                                </div>
                                <h3 class="feat__title">Excellence</h3>
                                <p>Our zeal to surpass ordinary standards, push boundaries and give quality solutions keeps us at the apex.</p>
                                <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="features__single mt-30">
                                <div class="features__head mb-40 ul_li_between">
                                    <div class="feat__icon">
                                        <img src="assets/img/icon/feat_02.png" alt="" />
                                    </div>
                                    <span class="feat__number">02</span>
                                </div>
                                <h3 class="feat__title">Accountability</h3>
                                <p>We are reliable. we are responsible. We take ownership of our work and honor our commitments to clients.</p>
                                <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="features__single mt-30">
                                <div class="features__head mb-40 ul_li_between">
                                    <div class="feat__icon">
                                        <img src="assets/img/icon/feat_03.png" alt="" />
                                    </div>
                                    <span class="feat__number">03</span>
                                </div>
                                <h3 class="feat__title">Nuture</h3>
                                <p>We nurture talents, we nurture projects. We invest in key and invaluable resources to help your business grow.</p>
                                <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
            
  )
}

export default About
