import featureImage1 from '../assets/features/image 348.png';
import featureImage2 from '../assets/features/image 348 (1).png';
import './features.css';

function features() {
    return (
        <>
            <section className="features">
                <article className="feature-block feature-block-left">
                    <div className="feature-content">
                        <h2 className="feature-title">Tomorrow should be better than today</h2>
                        <p className="feature-description">We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.</p>
                        <a href="#" className="feature-link">Read more <span className="arrow">→</span></a>
                    </div>
                    <div className="feature-image">
                        <img src={featureImage2} alt="feature" />
                    </div>
                </article>
                <article className="feature-block feature-block-right">
                    <div className="feature-image">
                        <img src={featureImage1} alt="feature" />
                    </div>
                    <div className="feature-content">
                        <h2 className="feature-title">See how we can help you progress</h2>
                        <p className="feature-description">We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.</p>
                        <a href="#" className="feature-link">Read more <span className="arrow">→</span></a>
                    </div>
                </article>

            </section>
        </>
    )
}
export default features