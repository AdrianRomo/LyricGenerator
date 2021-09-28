import React from 'react';
import '../../App.css';
import Footer from './Footer';
import '../css/About.css';

function About () {
    return (
        <>
            <div className='about-container'>
                <h1>¿Qué es Neural Lyrics?</h1>
                <p>Es un servicio gratuito el cual ofrece a los usuarios la posibilidad de generar nuevas letras musicales por medio de inteligencia artificial,</p>
                <p>gracias a un modelo generado por una base de datos con alrededor de 28,000 letras de canciones de distintos artistas de género Pop.</p>
                <p>Este servicio fue desarrollado por alumnos de la Escuela Superior de Cómputo del Instituto Politécnico Nacional.</p>
            </div>
            <Footer />
        </>
    );
}

export default About;
