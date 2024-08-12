import React from 'react'

function Features() {
  return (
    <section class="consulting__area pt-120">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse mt-none-30">
                        <div class="col-lg-6 mt-30">
                            <div class="consulting__img">
                                <img src="assets/img/bg/consult_img.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 mt-30">
                            <div class="sec__title mb-45">
                                <span class="sub__title"><i class="fas fa-star"></i>We are on a mission</span>
                                <h3 class="title mb-30">Our Mission</h3>
                                <p>Our mission is to work with partners who fully understand the needs and preferences of both clients and candidates, and consistently provide exceptional standards of assessment services based on the values of performance, trust and transparency.</p>
                            </div>
                            <div className="sec__title mb-45">
                                <h4 class="mb-30">We are goal oriented</h4>
                                <p>We provide the expected results. We are driven by the ultimate need to add value to our customers. We get the job done.</p>
                            </div>
                            {/* <ul class="info__list list-unstyled">
                                <li><i class="far fa-check"></i>100% Satisfaction Guranty</li>
                                <li><i class="far fa-check"></i>Fair Pricing for Everyone</li>
                                <li><i class="far fa-check"></i>Fast Traspermation & Reasult Holder</li>
                            </ul> */}
                            <div class="btns mt-15">
                                <a class="thm_btn" href="#!">How it works</a>
                                <a class="thm_btn thm_btn-2" href="#!">Talk with expart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Features
