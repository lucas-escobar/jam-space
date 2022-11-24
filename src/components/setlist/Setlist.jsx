import Song from '../song/Song.jsx';
import {useState} from 'react';
import './setlist.css';

export default function Setlist(props){
    /**
     * props: name(str), setList(Array)
     */
    const [name, setName] = useState(props.name);
    const [setList, updateSetList] = useState(props.setList);
    return(
        <section className="Setlist">
            {setList.map((song) => 
                <div className="Setlist__Song">{song}</div>
            )}
        </section>
    );
}