import React from 'react';
import '../../App.css';
import '../css/Samples.css';
import Footer from './Footer';

function Samples () {
    return (
        <>
            <div className='samples-container'>
                <h1>Samples</h1>
                <p>A continuación, ponemos a disposición algunos ejemplos de letras generadas por la inteligencia artificial de NeuraLyrics.com,</p>
                <p>los usuarios son libres de descargar y modificar los textos generados. </p>
                <div className="table">
                    <div className="table-header">
                        <div className="header__item">Palabra usada</div>
                        <div className="header__item">Enlace de descarga</div>
                    </div>
                    <div className="table-content">	
                        <div className="table-row">		
                            <div className="table-data">Palabra 1</div>
                            <div className="table-data">Enlace 1</div>
                        </div>
                        <div className="table-row">
                            <div className="table-data">Palabra 2</div>
                            <div className="table-data">Enlace 2</div>
                        </div>
                        <div className="table-row">
                            <div className="table-data">Palabra 3</div>
                            <div className="table-data">Enlace 3</div>
                        </div>
                    </div>	
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Samples;