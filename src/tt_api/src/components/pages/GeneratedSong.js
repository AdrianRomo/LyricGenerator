import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import {useState, useEffect} from 'react';

function GeneratedSong () {

    const [songs, setSong] = useState([])

    return (
        <>
            <h1>Lyric generada</h1>
            {songs.map(song => {
                return (
                    <textarea disabled>{song.body}</textarea>
                )
            })}
            <textarea disabled> Texto Generado </textarea>
            <button type="button" >Descargar</button>
            <button type="button" ><Link to="/generatedsong"> Generar nuevamente </Link></button>
            <button type="button" ><Link to="/generatesong"> Nuevos parametros </Link></button>           

            <Footer />
        </>
    );
}

export default GeneratedSong;