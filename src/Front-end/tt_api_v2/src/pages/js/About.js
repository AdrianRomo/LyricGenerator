import React from 'react';

function About() {
    return (
        <>
            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div> {/* .site-mobile-menu */}
                <div className="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: 'url("images/hero_bg_3.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay={400}>
                                <h2 className="text-white h1">About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-3" data-aos="fade-up"><h2 className="text-primary h4">Our Inspiration</h2></div>
                            <div className="col-lg-5 ml-auto order-lg-2 mb-5" data-aos="fade-up" data-aos-delay={200}>
                                <img src="images/hero_bg_1.jpg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                                <p className="lead">Es un servicio gratuito el cual ofrece a los usuarios la posibilidad de generar nuevas letras musicales por medio de inteligencia artificial,
                                    gracias a un modelo generado por una base de datos con alrededor de 28,000 letras de canciones de distintos artistas de género Pop.
                                    Este servicio fue desarrollado por alumnos de la Escuela Superior de Cómputo del Instituto Politécnico Nacional.</p>
                                <p>Nobis rem impedit eligendi! Temporibus dolorum rerum quod autem, iusto excepturi distinctio maxime, deserunt, odio veritatis aliquid illo dolorem! Odio quibusdam repellat dolores dolor ipsum perferendis id, quod voluptates amet.</p>
                                <p>Perspiciatis porro cumque dicta laborum laudantium quia et expedita dolorum, quis id facilis repudiandae nostrum nam temporibus dolores impedit tempora! Blanditiis tenetur neque harum molestiae ipsa minus. Nulla nemo, quis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                                <h2 className="mb-5">Weekly Radio Program</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
                            </div>
                        </div>
                        <div className="site-block-retro d-block d-md-flex">
                            <a href="#" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay={100}>
                                <div className="image" style={{ backgroundImage: 'url("images/img_2.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Classic Songs For Classic People</h2>
                                    <span>Friday 1:00pm — 2:30pm</span>
                                </div>
                            </a>
                            <div className="col2 ml-auto">
                                <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="image" style={{ backgroundImage: 'url("images/img_3.jpg")' }} />
                                    <div className="unit-9-content">
                                        <h2>Classic Songs For Classic People</h2>
                                        <span>Friday 1:00pm — 2:30pm</span>
                                    </div>
                                </a>
                                <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="image" style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
                                    <div className="unit-9-content">
                                        <h2>Classic Songs For Classic People</h2>
                                        <span>Friday 1:00pm — 2:30pm</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary" data-aos="fade">
                    <div className="container">
                        <div className="row">
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-facebook text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-twitter text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-instagram text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-linkedin text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-pinterest text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-youtube text-white" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;