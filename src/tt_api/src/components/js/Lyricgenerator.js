import React from 'react';
import '../Lyricgenerator.css';
import '../App.css';
import { Button } from './Button.js';
import DiscreteSlider from './Slider.js';
import Typewriter from 'typewriter-effect';

function sendWord(engword, percentval) {

    localStorage.setItem("EnglishWord-Value",engword); 
    localStorage.setItem("Percentage-Value",percentval); 

    fetch('http://localhost:5000/lyrics', {
        method:'POST',
        headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
    }).then(response => {    
        return response.json()
    }).then(json => {        
        this.setState({englishword: json[0]})
    }).catch(error => {
        console.log(error)
    })
}

function Lyricgenerator() {
    return (
        <div className='hero-container'>
            <img src='/videos/vinyl.webp'/>
            <div id='firstDiv' className='contentOne'>
                <h1>Lyric Generator</h1>
                <p>Lyrics generated using Artificial Intelligence</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => { 
                        console.log('Me hicieron click :3 ... ' + cont++);

                        if(document.getElementById('imagenGato').className == 'fade-in-image-hide'){
                            document.getElementById('imagenGato').className= 'fade-in-image-show';
                            document.getElementById('secondDiv').className= 'contentTwo-hide-opacity';
                            document.getElementById('firstDiv').className= 'contentTwo-show-opacity';
                        }
                        else{
                            document.getElementById('imagenGato').className= 'fade-in-image-hide';
                            document.getElementById('secondDiv').className= 'contentTwo-show-opacity';
                            document.getElementById('firstDiv').className= 'contentTwo-hide-opacity';
                        }
                        }}>
                        Generate your own song <i class="fas fa-play fa-xs" />
                    </Button>
                </div>
            </div>
            <div id='secondDiv' className='contentTwo'>
                <h1>Genera tu letra de canción.</h1>
                <h2>Introduce una palabra en idioma inglés, así como escoge un porcentaje de rimas para poder generar tu canción.</h2>
                <p>Palabra en inglés:</p>
                <input className='generatesong-input' id='english-word' type='text' placeholder='Love' required/>
                <p>Porcentaje de rimas dentro de la canción: </p>            
                <DiscreteSlider/>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={() => { 
                    document.getElementById('secondDiv').className= 'contentTwo-hide-opacity';
                    document.getElementById('firstDiv').className= 'contentOne';
                    }}>
                    Home
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={() => { 
                    document.getElementById('thirdDiv').className= 'contentTwo-show-opacity';
                    document.getElementById('secondDiv').className= 'contentTwo-hide-opacity';

                    sendWord(document.getElementById('english-word').value, document.getElementsByClassName('MuiSlider-root MuiSlider-colorPrimary')[0].children[2].value);
                    }}>
                    Generar Canción <i class="fas fa-play fa-xs" />
                </Button>
            </div>
            <div id='thirdDiv' className='contentThree'>
                <h1 on onLoad={clearCacheData}>Lyric generada</h1>
                <textarea id='textoly' hidden>texto lyric generado</textarea>
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString('Nuestros gatos compositores estan trabajando')
                    .pauseFor(2500)
                    .deleteAll()
                    typewriter.typeString('Lyric generada woooooo escribo soooolloooooo')
                    .start();
                }}
                />
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {}}>
                    Download
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {
                    //sendWord();
                }}>
                    Regenerate Lyrics
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {

                    document.getElementById('thirdDiv').className= 'contentTwo-hide-opacity';
                    document.getElementById('secondDiv').className= 'contentTwo-show-opacity';

                    }}>
                    Start Again
                </Button>
            </div>
        </div>
    )
}

export default Lyricgenerator
