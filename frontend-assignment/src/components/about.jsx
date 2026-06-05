import './about.css';

function about() {
    return (
        <>
            <section className="services">
                <div className="services-container">
                    <div className="services-header">
                        <h2 className="services-title">What we can offer you!</h2>
                    </div>

                    <div className="services-list">
                        <article className="service-item">
                            <div className="service-tag">Office of multiple interest content</div>
                            <h3 className="service-name">Collaborative & partnership</h3>
                            <a href="#" className="service-link"><span className="arrow">→</span></a>
                        </article>

                        <article className="service-item">
                            <div className="service-tag">The hanger US Air force digital experimental</div>
                            <h3 className="service-name">We talk about our weight</h3>
                            <a href="#" className="service-link"> <span className="arrow">→</span></a>
                        </article>

                        <article className="service-item">
                            <div className="service-tag">Delta faucet content, social, digital</div>
                            <h3 className="service-name">Piloting digital confidence</h3>
                            <a href="#" className="service-link"><span className="arrow">→</span></a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default about