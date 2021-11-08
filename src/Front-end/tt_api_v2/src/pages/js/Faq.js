import React from 'react';

function FAQ() {
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
                                <h2 className="text-white h1">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center" data-aos="fade" data-aos-delay={100}>
                            <div className="col-md-8">
                                <div className="accordion unit-8" id="accordion">
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">What kind of artifitial intelligence does Neural Lyrics use?<span className="icon" /></a>
                                        </h3>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>El servicio de NeuraLyrics.com fue realizado haciendo uso de la red neuronal recurrente de tipo LSTM (Long Short Term Memory) de tipo bidireccional.</p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">¿El servicio de NeuraLyrics.com puede aceptar más de 1 palabra al momento de generar la canción?<span className="icon" /></a>
                                        </h3>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>En teoría la aplicación puede aceptar más de 1 palabra para generar una canción, pero recomendamos usar solo 1 palabra para evitar que los textos generados carezcan de sentido o semántica.</p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">¿Qué soporte de idiomas tienen?<span className="icon" /></a>
                                        </h3>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>Por el momento solo contamos con idioma inglés, esto es debido a que no contamos con una buena base de datos de canciones en otro idioma.</p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">¿La base de datos utilizada en NeuraLyrics.com consta de canciones de un solo género musical o varios géneros?<span className="icon" /></a>
                                        </h3>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>La base de datos utilizada para la construcción del modelo de NeuraLyrics.com es de un solo género musical, en este caso es del género Pop, ya que encontramos que este género cuenta con una estructura mas definida que otros géneros, pero también contamos con bases de otros géneros como rock o hip hop y esperamos poder generar algún modelo usando estos géneros en un futuro</p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                </div>
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

export default FAQ;