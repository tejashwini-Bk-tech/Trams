import ellipse263 from '../assets/testimonial/Ellipse 263.png';
import ellipse264 from '../assets/testimonial/Ellipse 264.png';
import ellipse265 from '../assets/testimonial/Ellipse 265.png';
import ellipse266 from '../assets/testimonial/Ellipse 266.svg';
import ellipse267 from '../assets/testimonial/Ellipse 267.png';
import ellipse268 from '../assets/testimonial/Ellipse 268.svg';
import ellipse269 from '../assets/testimonial/Ellipse 269.png';
import ellipse270 from '../assets/testimonial/Ellipse 270.svg';
import './testimonial.css';

function testimonial() {
    return (
        <>
            <section className="testimonials">
                <div className="testimonials-container">
                    <div className="testimonials-left">
                        <div className="testimonial-avatars testimonials-left-group">
                            <img src={ellipse263} alt="customer" className="avatar" />
                            <img src={ellipse266} alt="customer" className="avatar" />
                            <img src={ellipse268} alt="customer" className="avatar" />
                            <img src={ellipse267} alt="customer" className="avatar" />
                        </div>
                    </div>

                    <div className="testimonials-center">
                        <div className="testimonial-content">
                  <h2 className="testimonial-title"> <span className="hl hl-green">what</span> Our Customers Say <span className="hl hl-underline">about us</span></h2>
          <p className="testimonial-quote">Elementum delivered the site on schedule and exceeded expectations. Within days of launch, the client saw a 50% traffic increase. The team introduced modern technologies the company hadn’t used before, which proved easy to adopt and highly reliable.</p>
                        </div>
                    </div>

                    <div className="testimonials-right">
                        <div className="testimonial-avatars testimonials-right-group">
                            <img src={ellipse270} alt="customer" className="avatar" />
                            <img src={ellipse264} alt="customer" className="avatar" />
                            <img src={ellipse265} alt="customer" className="avatar" />
                            <img src={ellipse269} alt="customer" className="avatar" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default testimonial