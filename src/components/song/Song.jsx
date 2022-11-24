import {useState} from 'react';
import './song.css';

export default function Song(props){
    /**
     * Props: title, artist, date added, art, (album, bpm)
     */
    const [title, setTitle] = useState(props.title);
    const [artist, setArtist] = useState(props.artist);
    return(
        <>
            <section className="Song">
                <div className="Song__Title">{title}</div>
                <div className="Song__Artist">{artist}</div>
            </section>
        </>
    )
}