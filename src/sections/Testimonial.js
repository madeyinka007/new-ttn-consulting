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
                            <p>“Working with Tezzbax is always an absolute joy, both personally and professionally. Tommy is an amazing speaker; her experience, expertise and genuine passion for what she does is obvious in every word he says.”</p>
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
                            <p>“Working with Tezzbax is always an absolute joy, both personally and professionally. Tommy is an amazing speaker; her experience, expertise and genuine passion for what she does is obvious in every word he says.”</p>
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
                            <p>“Working with Tezzbax is always an absolute joy, both personally and professionally. Tommy is an amazing speaker; her experience, expertise and genuine passion for what she does is obvious in every word he says.”</p>
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
                            <p>“Working with Tezzbax is always an absolute joy, both personally and professionally. Tommy is an amazing speaker; her experience, expertise and genuine passion for what she does is obvious in every word he says.”</p>
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
