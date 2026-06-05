import ellipse262 from '../assets/hero/Ellipse 262.svg';
import ellipse261 from '../assets/hero/Ellipse 261.png';
import ellipse255 from '../assets/hero/Ellipse 255.svg';
import ellipse256 from '../assets/hero/Ellipse 256.png';
import ellipse257 from '../assets/hero/Ellipse 257.png';
import ellipse258 from '../assets/hero/Ellipse 258.svg';
import ellipse259 from '../assets/hero/Ellipse 259.png';
import ellipse260 from '../assets/hero/Ellipse 260.svg';
import './hero.css';

function hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">The thinkers and doers were changing the status Quo with</h1>
                        <p className="hero-description">We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.</p>
                    </div>
                    <div className="hero-images">
                        <div className="hero-image-group">
                            <div className="hero-image-pair">
                                <img src={ellipse262} alt="team member" />
                                <img src={ellipse261} alt="team member" />
                            </div>
                            <div className="hero-image-pair">
                                <img src={ellipse255} alt="team member" />
                                <img src={ellipse256} alt="team member" />
                            </div>
                            <div className="hero-image-pair">
                                <img src={ellipse257} alt="team member" />
                                <img src={ellipse258} alt="team member" />
                            </div>
                            <div className="hero-image-pair">
                                <img src={ellipse259} alt="team member" />
                                <img src={ellipse260} alt="team member" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default hero