import React from 'react';
import '../../App.css';
import Footer from './Footer';
import '../css/Faq.css'

function Faq () {
    return (
        <>
            <div className='faq-container'>                
            <img alt='' src='/videos/vinyl.webp'/>
                <h1>Preguntas frecuentes</h1>
                <h2>¿Qué tipo de inteligencia artificial utiliza el servicio?</h2>
                <p>El servicio de NeuraLyrics.com fue realizado haciendo uso de la red neuronal recurrente de tipo LSTM (Long Short Term Memory) de tipo bidireccional.</p>
                <h2>¿El servicio de NeuraLyrics.com puede aceptar más de 1 palabra al momento de generar la canción? </h2>
                <p>Si, NeuraLyrics.com puede aceptar más de 1 palabra para generar una canción,</p>
                <p> pero recomendamos usar solo 1 palabra para evitar que los textos generados carezcan de sentido o semántica.</p>
                <h2>¿NeuraLyrics.com solo acepta palabras en inglés?</h2>
                <p>Por el momento si, esto es debido a que no contamos con una buena base de datos de canciones en otro idioma.</p>
                <h2>¿La base de datos utilizada en NeuraLyrics.com consta de canciones de un solo género musical o varios géneros?</h2>
                <p>La base de datos utilizada para la construcción del modelo de NeuraLyrics.com es de un solo género musical,</p>
                <p>en este caso es del género Pop, ya que encontramos que este género cuenta con una estructura mas definida que otros géneros,</p>
                <p>pero también contamos con bases de otros géneros como rock o hip hop y esperamos poder generar algún modelo usando estos géneros en un futuro</p>     
            </div>
            <Footer />
        </>
    );
}

export default Faq;
