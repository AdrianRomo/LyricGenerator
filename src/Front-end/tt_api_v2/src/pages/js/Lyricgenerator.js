import React from 'react';
import ReactDOM from 'react-dom'
import '../css/Lyricgenerator.css';
import { Button } from '../../components/Button.js';
import { Canvas } from './Canvas';
import { Writing } from './Writing';

var quoteArray;
var speed = 20;
var rebooted= false;
var lyricCounterToEnableButtons= 0;
var funfacts= ['Music helps people with brain injuries recall personal memories', 'Heavy metal and classical music fans have similar personality traits', 'Cows produce more milk when listening to slow music', ' A song that gets stuck in your head is called an earworm', 'Loud music causes you to drink more in less time', 'Music is physically good for your heart by triggering physiological changes that modulate blood pressure, heart rate, and respiratory functions', 'Listening to music utilizes the entire brain', 'None of The Beatles could read or write music', 'Music helps plants grow faster', 'Music affects your perception of the world', 'Some people feel nothing toward music', 'In 2016, Mozart sold more CDs than Beyoncé ','Other Funfact']
function sendWord(engword, percentval) {

    localStorage.setItem("EnglishWord-Value",engword); 
    localStorage.setItem("Percentage-Value",percentval); 

    var myVar= setInterval(myFunFactsFunction, 6000); 
    function myFunFactsFunction(){
        var position= getRandomInt(0, funfacts.length - 1);

        myFunFactsTypewriter('myTextReceived', position, 0);
    }

    fetch('http://neuralyrics.us-east-1.elasticbeanstalk.com/lyrics', {
        method:'POST',
        headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
    }).then(response => {    
        rebooted= true;
        return response.json()
    }).then(json => {        

        var wholeAnswer= JSON.stringify(json)
        var resp= JSON.parse(wholeAnswer);

        clearInterval(myVar);
        if(typeof resp.message !== 'undefined' && resp.message.length > 0){
            alert('Oops, ocurrió un error');
            document.getElementById('MyTestButton').disabled= false;
        }else{
            rebooted= false;
            document.querySelector("#myTextReceived").style.display='none';
            document.querySelector("#myTextReceived").innerHTML= '';

            let ele = document.getElementById('lyricContainer');
            var one = document.createElement('div');;
            ReactDOM.render(<Writing lyricTitle="Verse 1" lyricParagraphId="verso_1" />, one);
            ele.innerHTML += one.innerText;
            ReactDOM.render(<Writing lyricTitle="Chorus" lyricParagraphId="coro_1" />, one);
            ele.innerHTML += one.innerText;
            ReactDOM.render(<Writing lyricTitle="Verse 2" lyricParagraphId="verso_2" />, one);
            ele.innerHTML += one.innerText;
            ReactDOM.render(<Writing lyricTitle="Chorus" lyricParagraphId="coro_2" />, one);
            ele.innerHTML += one.innerText;

            ele.style.display= 'contents';
            
            // Important!
            var tempArray= [];
            var chorus_counter= 0;
            for (const [key, value] of Object.entries(resp)) {
                
                if(key.includes('verse')){
                    if(key.includes('_1')){
                        tempArray.splice((1), 0, value[0]);
                    }else if(key.includes('_2')){
                        tempArray.splice((2), 0, value[0]);
                    }else{
                        tempArray.splice((3), 0, value[0]);
                    }
                }else{
                    if(chorus_counter++ === 0){
                        tempArray.splice(0, 0, value[0]);
                    }
                }
            }

            quoteArray= [];
            for(var i= 0; i< tempArray.length; i++){
                quoteArray.push(tempArray[i]);
            }

            myTypewriter('verso_1', 1, 0);
            myTypewriter('coro_1', 0, 0);
            myTypewriter('verso_2', 2, 0);
            myTypewriter('coro_2', 0, 0);

            if(quoteArray.length > 3){
                ReactDOM.render(<Writing lyricTitle="Verse 3" lyricParagraphId="verso_3" />, one);
                ele.innerHTML += one.innerText;
                myTypewriter('verso_3', 3, 0);
            }
            ReactDOM.unmountComponentAtNode(one);
        }


    }).catch(error => {
        console.log(error)
    })
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateInput(e){
    e.target.value = e.target.value.replace(/\s/g, "");
}

function myFunFactsTypewriter(receivedId, arrayPosition, textPosition){
    document.getElementById(receivedId).innerHTML = funfacts[arrayPosition].substring(0, textPosition) + '<span>\u25AE</span>';
  
    if((textPosition++ < funfacts[arrayPosition].length) && !rebooted){
        setTimeout(myFunFactsTypewriter.bind(null, receivedId, arrayPosition, textPosition), speed);
    }else{
        document.getElementById(receivedId).innerHTML = funfacts[arrayPosition].substring(0, textPosition);
    }
}

function myTypewriter(receivedId, arrayPosition, textPosition){
    document.getElementById(receivedId).innerHTML = quoteArray[arrayPosition].substring(0, textPosition) + '<span>\u25AE</span>';
  
    if((textPosition++ < quoteArray[arrayPosition].length) && !rebooted){
        setTimeout(myTypewriter.bind(null, receivedId, arrayPosition, textPosition), speed);
    }else{
        document.getElementById(receivedId).innerHTML = quoteArray[arrayPosition].substring(0, textPosition);
        lyricCounterToEnableButtons++;

        if(lyricCounterToEnableButtons > 4){
            document.getElementById('downloadButton').disabled= false;
            document.getElementById('regenerateButton').disabled= false;
            document.getElementById('MyTestButton').disabled= false;
        }
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function Lyricgenerator() {

    return (
        <div className='hero-container'>
            <div id='firstDiv' className='contentOne'>
                <h1>Lyric Generator</h1>
                <p>Lyrics generated using Artificial Intelligence</p>
                <Canvas className='breathable-button' width={120} height={120} onClick={() => { 
                    document.getElementsByClassName('site-section')[0].style.display= 'none';
                    document.getElementsByClassName('site-section')[1].style.display= 'none';
                    document.getElementsByClassName('site-section')[2].style.display= 'none';
                    document.getElementById('secondDiv').className= 'contentTwoThree-show';
                    document.getElementById('firstDiv').className= 'contentOne-hide';
                }}/>
                <div className="hero-btns">
                </div>
            </div>
            <div id='secondDiv' className='contentTwo'>
                <div className="overlay inner-page-cover subscribe" style={{ background: '' }} >
                    <div className="container">
                        <h1>Generate your own song!</h1>
                        <h5>Insert an english word and click the button to begin.</h5>                        
                        <h5>Remember that this word will be the topic of your lyric.</h5>
                        <div className="site-block-subscribe">
                            <div className="input-group mb-3">
                                <input id='english-word' type="text" className="form-control border-secondary text-white bg-transparent" placeholder="e.g. Love" aria-label="Enter a Word" onChange={(e)=> updateInput(e)} aria-describedby="button-addon2" required/>
                            </div>
                            {
                                /*
                                    <h6>Porcentaje de rimas dentro de la canción: </h6> 
                                    <div align='center' className='dslider'>          
                                        <DiscreteSlider/>
                                    </div>
                                 */
                            }
                            <div className="centering">
                                <Button buttonId='button-addon2' buttonClass='btn btn-primary' type="button" onClick={() => {
                                    document.getElementById('secondDiv').className= 'contentTwoThree-hide';
                                    document.getElementById('firstDiv').className= 'contentOne-show';
                                    document.getElementsByClassName('site-section')[0].style.display= 'inline';
                                    document.getElementsByClassName('site-section')[1].style.display= 'inline';
                                    document.getElementsByClassName('site-section')[2].style.display= 'inline';
                                }}>
                                    Home
                                </Button>
                                <Button buttonId='button-addon2' buttonClass='btn btn-primary' type="button" onClick={() => {
                                    if(document.getElementById('english-word').value.length > 0){
                                        document.getElementById('thirdDiv').className= 'contentTwoThree-show';
                                        document.getElementById('secondDiv').className= 'contentTwoThree-hide';
                                        document.getElementById('MyTestButton').disabled= true;
                                        document.getElementById('downloadButton').disabled= true;
                                        document.getElementById('regenerateButton').disabled= true;
                                        quoteArray= ["Generating your Lyric and making some magic with Artificial Intelligence!..."];
                                        myTypewriter('myTextReceived', 0, 0);
                                        sendWord(document.getElementById('english-word').value, 50);
                                    }else{
                                        alert('Oops! Olvidaste poner la palabra con la que se generará la canción 😱');
                                    }
                                }}>
                                    Generate a Song <i className="fas fa-play fa-xs" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='thirdDiv' className='contentThree'>
                <h1>Generated Lyric</h1>
                <p id='myTextReceived'></p>
                <div id='lyricContainer'></div>
                <div className= 'centering'>
                    <Button buttonId='downloadButton' buttonClass='btn btn-primary' type="button" onClick={() => {
                        var textToBeDownloaded= document.querySelector("#lyricContainer").innerText;
                        textToBeDownloaded= textToBeDownloaded.replace('<span>\u25AE</span>','');

                        download('Lyric.txt',textToBeDownloaded);
                    }}>
                        Download
                    </Button>
                    <Button buttonId='regenerateButton' buttonClass='btn btn-primary' type="button" onClick={() => {
                        let ele = document.getElementById('lyricContainer');
                        ele.innerHTML = "";
                        document.getElementById('MyTestButton').disabled= true;
                        document.getElementById('downloadButton').disabled= true;
                        document.getElementById('regenerateButton').disabled= true;
                        document.querySelector("#myTextReceived").style.display='block';
                        quoteArray= ["Generating your Lyric and making some magic with Artificial Intelligence!..."];
                        rebooted= false;
                        myTypewriter('myTextReceived', 0, 0);
                        sendWord(document.getElementById('english-word').value, 50);
                    }}>
                        Regenerate Lyrics
                    </Button>
                    <Button buttonId='MyTestButton' buttonClass='btn btn-primary' type="button" onClick={() => {

                        document.getElementById('thirdDiv').className= 'contentTwoThree-hide';
                        document.getElementById('secondDiv').className= 'contentTwoThree-show';

                        let ele = document.getElementById('lyricContainer');
                        ele.innerHTML = "";
                        document.querySelector("#myTextReceived").style.display='block';

                        }}>
                        Start Again
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Lyricgenerator
