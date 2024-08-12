import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Clients() {
  return (
            <section class="brand__area pt-120 pb-100">
                <div class="container">
                    <div class="brand__title text-center mb-50">
                        <span>Client Who work with us</span>
                    </div>
                    <OwlCarousel
                        items={5}
                        className="brand__active owl-carousel text-center"
                        margin={30}
                        auotplay={true}
                        autoplayTimeout={6000}
                        smartSpeed={800}
                        nav={false}
                        dots={false}
                     >
                        <div class="brand__item">
                            <img src="assets/img/brand/img_01.png" alt="" />
                        </div>
                        <div class="brand__item">
                            <img src="assets/img/brand/img_02.png" alt="" />
                        </div>
                        <div class="brand__item">
                            <img src="assets/img/brand/img_03.png" alt="" />
                        </div>
                        <div class="brand__item">
                            <img src="assets/img/brand/img_04.png" alt="" />
                        </div>
                        <div class="brand__item">
                            <img src="assets/img/brand/img_05.png" alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </section>
  )
}

export default Clients
