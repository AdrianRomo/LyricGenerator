import React, {useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import axios from 'axios';

function LyricPage () {

    var textlyric
    
    

    var engword = localStorage.getItem("EnglishWord-Value");
    
    var percval = localStorage.getItem("Percentage-Value");

    console.log(engword)
    console.log(percval)
    /*
    useEffect(() => {
        fetchLyricAsync () 
    }, [])
    
    const fetchLyricAsync = async () =>{
        const result = await axios.get("")
        console.log(result)
    }
    */

    function sendWord() {

        localStorage.setItem("EnglishWord-Value",engword); 
        localStorage.setItem("Percentage-Value",percval); 


        fetch('http://localhost:5000/lyrics', {
            method:'POST',
            headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
            body:JSON.stringify({"lyric_input":engword,"percentage":percval})
        }).then(response => {    
            return response.json()
        }).then(json => {        
            this.setState({englishword: json[0]})
        }).catch(error => {
            console.log(error)
        })
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
        <>
            <h1 on onLoad={clearCacheData}>Lyric generada</h1>
            <textarea id='textoly' hidden>texto lyric generado</textarea>
            <Typewriter onInit={(typewriter) => {
                typewriter.typeString('Nuestros gatos compositores estan trabajando')
                .pauseFor(2500)
                .deleteAll()
                typewriter.typeString('Lyric generada')
                .start();
             }}
            />
            <button type="button" onClick={lyricgen}>Descargar</button>
            <button type="button" onClick={sendWord}><Link to="/lyricpage"> Generar nuevamente </Link></button>
            <button type="button" ><Link to="/generatesong"> Nuevos parametros </Link></button>            

            <Footer />
        </>
    );
}

export default LyricPage;