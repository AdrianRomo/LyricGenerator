import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Samples.css';

function Samples () {
    return (
        <>
            <div className='samples-container'>
                <h1>Samples</h1>
                <p>A continuación, ponemos a disposición algunos ejemplos de letras generadas por la inteligencia artificial de Lyrics.ia,</p>
                <p>los usuarios son libres de descargar y modificar los textos generados. </p>
                <div class="table">
                    <div class="table-header">
                        <div class="header__item">Palabra usada</div>
                        <div class="header__item">Enlace de descarga</div>
                    </div>
                    <div class="table-content">	
                        <div class="table-row">		
                            <div class="table-data">Palabra 1</div>
                            <div class="table-data">Enlace 1</div>
                        </div>
                        <div class="table-row">
                            <div class="table-data">Palabra 2</div>
                            <div class="table-data">Enlace 2</div>
                        </div>
                        <div class="table-row">
                            <div class="table-data">Palabra 3</div>
                            <div class="table-data">Enlace 3</div>
                        </div>
                    </div>	
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Samples;