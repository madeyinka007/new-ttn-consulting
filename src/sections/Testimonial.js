import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
  return (
            <section class="testimonial__area pt-120">
                <div class="container-fluid p-0 plr-xs-15">
                    <div class="sec__title text-center mb-60">
                        <span class="sub__title"><i class="fas fa-star"></i>Client Feedback</span>
                        <h2 class="title">Our client & there Opinion</h2>
                    </div>
                    {/* <div class=""> */}
                        <OwlCarousel
                            items={2}
                            className={"testimonial__carousel owl-carousel"}
                            margin={30}
                            dots={false}
                            autoplay={true}
                            loop
                            smartSpeed={1000}
                            autoplayTimeout={5000}
                            autoplayHoverPause={true}
                            center={true}
		                    stagePadding={200}
                        >
                            <div class="testimonial__item">
                            <div class="avatar">
                                <img src="assets/img/avatar/test_01.png" alt="" />
                            </div>
                            <h4 class="name">Rasalina Willams</h4>
                            <ul class="ratting__star ul_li_center mb-20">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                            <p>“TTN Consulting’s expertise in executive recruitment has been invaluable to our company. Their deep understanding of the market and commitment to finding the right leaders have significantly strengthened our executive team. Highly recommended!”</p>
                            <div class="testi__quote">
                                <img src="assets/img/icon/quote.png" alt="" />
                            </div>
                        </div>
                        <div class="testimonial__item">
                            <div class="avatar">
                                <img src="assets/img/avatar/test_01.png" alt="" />
                            </div>
                            <h4 class="name">Alexa Willams</h4>
                            <ul class="ratting__star ul_li_center mb-20">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                            <p>“Our compliance with HR regulations has never been better, thanks to TTN Consulting. Their thorough and proactive approach to HR compliance has helped us navigate complex regulations smoothly, ensuring we remain ahead of the curve.”</p>
                            <div class="testi__quote">
                                <img src="assets/img/icon/quote.png" alt="" />
                            </div>
                        </div>
                        <div class="testimonial__item">
                            <div class="avatar">
                                <img src="assets/img/avatar/test_01.png" alt="" />
                            </div>
                            <h4 class="name">Johan Sponds</h4>
                            <ul class="ratting__star ul_li_center mb-20">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                            <p>“The assessment center designed by TTN Consulting was a game-changer for our recruitment process. Their professional and innovative approach ensured we identified the best candidates effectively and efficiently. We look forward to future collaborations.”</p>
                            <div class="testi__quote">
                                <img src="assets/img/icon/quote.png" alt="" />
                            </div>
                        </div>
                        <div class="testimonial__item">
                            <div class="avatar">
                                <img src="assets/img/avatar/test_01.png" alt="" />
                            </div>
                            <h4 class="name">Halina he Spond</h4>
                            <ul class="ratting__star ul_li_center mb-20">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                            <p>“TTN Consulting's expertise in talent management has transformed our approach to recruiting and developing staff. Their insights and strategies have greatly enhanced our team’s performance and alignment with our business goals.”              </p>
                            <div class="testi__quote">
                                <img src="assets/img/icon/quote.png" alt="" />
                            </div>
                        </div>
                        </OwlCarousel>
                    {/* </div> */}
                </div>
            </section>
  )
}

export default Testimonial
