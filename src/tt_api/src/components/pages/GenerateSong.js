import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function GenerateSong () {

    var engword
    var percentval
    function sendWord() {

        engword = document.getElementById("lyric_input").value
        percentval = document.getElementById("percentage").value

        fetch('http://localhost:5000/lyrics', {
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Access-Control-Allow-Origin':'*'

            },
            body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
        })
    }

    return (
        <>
            <h1>Genera tu letra de canción.</h1>
            <h2>Introduce una palabra en idioma inglés, así como escoge un porcentaje de rimas para poder generar tu canción.</h2>
            <p>Palabra en inglés:</p>
            <form>
            <input className='generatesong-input' id='lyric_input' type='text' placeholder='Your word' />
            <p>Porcentaje de rimas dentro de la canción: </p>
            <input type="range" id="percentage" min="0" max="100" step="25" list="tickmarks" />
            <datalist id="tickmarks">
                <option value="0" label="0%"/>
                <option value="25" label="25%"/>
                <option value="50" label="50%"/>
                <option value="75" label="75%"/>
                <option value="100" label="100%"/>
            </datalist>
            <button type="button" onClick={sendWord}>
                <Link to="/generatedsong">
                    Generar cancion
                </Link>  
            </button>
            </form>
            <Footer />
        </>
    );
}

export default GenerateSong;