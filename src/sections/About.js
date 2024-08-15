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
                                    <span class="big__text--stock">15+</span>
                                    <span class="big__text--fill">15+</span>
                                </h1>
                                <h5 class="title">Years of Cumulative Expertise</h5>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="services__content mt-30 pl-90">
                                <div class="sec__title mb-30">
                                    <span class="sub__title"><i class="fas fa-star"></i>Our Story</span>
                                    <h4 class="title_sm mb-25">Unlock the Power of Effective HR with TTN Consulting</h4>
                                    <p>With a proven track record of over 15 years, TTN Consulting offers top-tier HR solutions designed to address your most pressing challenges. Our client-centric approach ensures personalized strategies that foster growth and efficiency. Partner with us to experience unparalleled expertise and transformative results.</p>
                                    <p>We specialize in recruitment, training, performance management, succession planning, employee engagement, compensation and benefits, workforce planning, HR technology, trainee recruitment, psychometric testing, and assessment centers.</p>
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
                                <h3 class="feat__title">Client-Centric Approach</h3>
                                <p>We prioritize understanding and fulfilling the unique needs of each client. This involves active listening, open communication, and tailored solutions that drive client success.</p>
                                {/* <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a> */}
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
                                <h3 class="feat__title" style={{fontSize:"29px"}}>Integrity & Confidentiality</h3>
                                <p>We maintain the highest standards of integrity in all interactions, ensuring confidentiality and trust in our client relationships while handling sensitive HR matters with discretion.</p>
                                {/* <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a> */}
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
                                <h3 class="feat__title">Results-Driven Excellence</h3>
                                <p>By setting clear objectives and benchmarks, we ensure our consulting services contribute directly to the success and growth of our clients' businesses.</p>
                                {/* <a class="feat__link" href="service-details.html"><i class="far fa-arrow-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
            
  )
}

export default About
