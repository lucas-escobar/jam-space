import Song from '../song/Song.jsx';
import './setlist.css';

export default function Setlist(props){
    /**
     * Stores 
     * props: name, setList
     */
    return(
        <>
            <section className="Setlist">
                <div className="Setlist__Song">
                    <Song title="Song Title" artist="Artist Name"/>
                </div>
                <div className="Setlist__Song">
                    <Song title="Song Title" artist="Artist Name"/>
                </div>
            </section>
        </>
    );
}