import { useState } from 'react';
import { getSong } from 'genius-lyrics-api';
import './song.css';

export default function Song(props){
    /**
     * @param {{title: string, artist: string, dateAdded: Date}} props
     */
    const [title, setTitle] = useState(props.title);
    const [artist, setArtist] = useState(props.artist);
    const [selected, setSelected] = useState(false);
    getSong({
        apiKey: process.env.REACT_APP_GENIUS_ACCESS_TOKEN,
        title: title,
        artist: artist,
        optimizeQuery: true 
    }).then((song) => 
        console.log(
            `${song.albumArt}
            ${song.lyrics}`
        )
    ).catch((err) => {
        console.log(err);
    });

    return(
        <section className="Song">
            <div className="Song__Title">{title}</div>
            <div className="Song__Artist">{artist}</div>
        </section>
    );
}