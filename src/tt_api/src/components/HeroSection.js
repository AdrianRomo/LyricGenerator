import React from 'react';
import './HeroSection.css';
import '../App.css';
import {Button} from './Button.js';
import { Link } from 'react-router-dom';
import DiscreteSlider from './Slider.js';
import Typewriter from 'typewriter-effect';

var engword
    var percentval

    function sendWord() {

        engword = document.getElementById("english-word").value
        percentval = document.getElementById("percentage").value

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

function HeroSection() {
    var cont= 0;
    var textlyric
    var engword = localStorage.getItem("EnglishWord-Value");
    var percval = localStorage.getItem("Percentage-Value");

    console.log(engword)
    console.log(percval)

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    }

    function lyricgen() {
        textlyric = document.getElementById("textoly").value
        download('Lyric.txt',textlyric)
    }

    const clearCacheData = () => {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
    };

    return (
        <div className='hero-container'>
            <video src='/videos/vinyl.mp4' autoPlay loop muted />
            <div id='firstDiv' className='contentOne'>
                <h1>You are</h1>
                <p>What you listen to</p>
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
                <div id="imagenGato" className='fade-in-image-show'>
                    <img src="/images/nezuko.webp"></img>
                </div>
            </div>
            <div id='secondDiv' className='contentTwo'>
                <h1>Genera tu letra de canción.</h1>
                <h2>Introduce una palabra en idioma inglés, así como escoge un porcentaje de rimas para poder generar tu canción.</h2>
                <p>Palabra en inglés:</p>
                <input className='generatesong-input' id='english-word' type='text' placeholder='Love' required/>
                <p>Porcentaje de rimas dentro de la canción: </p>            
                <DiscreteSlider/>
                <Link to="/lyricpage">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={() => { 
                        console.log('Valor del slideBar:  ' + document.getElementsByClassName('MuiSlider-root MuiSlider-colorPrimary')[0].children[2].value);

                        //sendWord();
                        }}>
                        Generar Canción <i class="fas fa-play fa-xs" />
                    </Button>
                </Link>   
                {
                    //<button className='btn btn--outline btn--medium' type="button" onClick={sendWord}>Generar Canción</button>

                }
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
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {}}>
                        Regenerate Lyrics
                    </Button>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {}}>
                        Start Again
                    </Button>
                    {
                        /*
                        <button type="button" onClick={lyricgen}>Descargar</button>
                        <button type="button" onClick={sendWord}><Link to="/lyricpage"> Generar nuevamente </Link></button>
                        <button type="button" ><Link to="/generatesong"> Nuevos parametros </Link></button>
                        */
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection
