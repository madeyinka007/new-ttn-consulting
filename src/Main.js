import Footer from "./common/Footer"
import Headers from "./common/Headers"
import About from "./sections/About"
import Clients from "./sections/Clients"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Process from "./sections/Process"
import Service from "./sections/Service"
import Testimonial from "./sections/Testimonial"


function Main() {
  return (
    <div className="body_wrap body_boxed">
        <div className="progress-wrap">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        <Headers />
        <main>
            <Hero />
            <About />
            <Features />
            <Service />
            <Process />
            <Testimonial />
            <Clients />
        </main>
        <Footer />
    </div>
  )
}

export default Main
