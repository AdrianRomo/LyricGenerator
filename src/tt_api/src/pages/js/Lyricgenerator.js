import React from 'react';
import '../css/Lyricgenerator.css';
import '../../App.css';
import { Button } from '../../components/js/Button.js';
import DiscreteSlider from '../../components/js/Slider.js';
//import Typewriter from 'typewriter-effect';

var songWord;
var quoteArray;
var textPosition = 0; 
var speed = 100;
var rebooted= false;
function sendWord(engword, percentval) {

    localStorage.setItem("EnglishWord-Value",engword); 
    localStorage.setItem("Percentage-Value",percentval); 

    fetch('http://localhost/lyrics', {
        method:'POST',
        headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
    }).then(response => {    
        return response.json()
    }).then(json => {        
        //Este apartado cambia en tiempo real el texto recuperado
        //this.setState({englishword: json[0]})
        rebooted= true;

        var wholeAnswer= JSON.stringify(json)
        console.log('Se recibe: ' + wholeAnswer);
        var resp= JSON.parse(wholeAnswer);
        console.log('Respuesta: ' + resp.generated_lyric);
        
        document.querySelector("#myTextReceived").innerHTML= '';
        rebooted= false;
        quoteArray= [resp.generated_lyric];
        textPosition= 0;
        myTypewriter();

        document.getElementById('MyTestButton').disabled= false;
    }).catch(error => {
        console.log(error)
    })
}

function myTypewriter(){
    document.getElementById("myTextReceived").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
    if((textPosition++ != quoteArray[0].length) && !rebooted)
      setTimeout(myTypewriter, speed);
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
                            console.log('Me hicieron click :3 ... ');
                            document.getElementById('secondDiv').className= 'contentTwoThree-show';
                            document.getElementById('firstDiv').className= 'contentOne-hide';
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
                    document.getElementById('secondDiv').className= 'contentTwoThree-hide';
                    document.getElementById('firstDiv').className= 'contentOne-show';
                    }}>
                    Home
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={() => { 
                    document.getElementById('thirdDiv').className= 'contentTwoThree-show';
                    document.getElementById('secondDiv').className= 'contentTwoThree-hide';
                    document.getElementById('MyTestButton').disabled= true;
                    quoteArray= ["Nuestros gatos compositores estan trabajando..."];
                    textPosition= 0;
                    myTypewriter();

                    sendWord(document.getElementById('english-word').value, document.getElementsByClassName('MuiSlider-root MuiSlider-colorPrimary')[0].children[2].value);
                    }}>
                    Generar Canción <i class="fas fa-play fa-xs" />
                </Button>
            </div>
            <div id='thirdDiv' className='contentThree'>
                <h1>Lyric generada</h1>
                <p id='myTextReceived'></p>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {
                    alert('Download');
                }}>
                    Download
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {
                    //sendWord();
                    alert('Reenviar');
                }}>
                    Regenerate Lyrics
                </Button>
                <Button buttonId='MyTestButton' className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {

                    alert('Start Again');
                    document.getElementById('thirdDiv').className= 'contentTwoThree-hide';
                    document.getElementById('secondDiv').className= 'contentTwoThree-show';
                    }}>
                    Start Again
                </Button>
            </div>
        </div>
    )
}

export default Lyricgenerator
