import './song.css'

export default function Song(props){
    /**
     * Props: title, artist, art, (album, bpm)
     */
    return(
        <>
            <section className="Song">
                <div className="Song__Title">{props.title}</div>
                <div className="Song__Artist">{props.artist}</div>
            </section>
        </>
    )
}