import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Faq () {
    return (
        <>
            <h1>Preguntas frecuentes</h1>
            <h2>¿Qué tipo de inteligencia artificial utiliza el servicio?</h2>
            <p>El servicio de Lyrics.ia fue realizado haciendo uso de la red neuronal recurrente de tipo LSTM (Long Short Term Memory) de tipo bidireccional.</p>
            <h2>¿El servicio de Lyrics.ia puede aceptar más de 1 palabra al momento de generar la canción? </h2>
            <p>Si, Lyrics.ia puede aceptar mas de 1 palabra para generar una canción, pero recomendamos usar solo 1 palabra para evitar que los textos generados carezcan de sentido o semántica.</p>
            <h2>¿Lyrics.ia solo acepta palabras en inglés?</h2>
            <p>Por el momento si, esto es debido a que no contamos con una buena base de datos de canciones en otro idioma.</p>
            <h2>¿La base de datos utilizada en Lyrics.ia consta de canciones de un solo género musical o varios géneros?</h2>
            <p>La base de datos utilizada para la construcción del modelo de Lyrics.ia es de un solo genero musical, en este caso es del genero Pop, ya que encontramos que este genero cuenta con una estructura mas definida que otros generos, pero también contamos con bases de otros generos como rock o hip hop y esperamos poder generar algún modelo usando estosgeneros en un futuro</p>     
            <Footer />
        </>
    );
}

export default Faq;