import Song from '../song/Song.jsx';
import {useState} from 'react';
import './setlist.css';

export default function Setlist(props){
    /**
     * props: name(str), setList(Array)
     */
    const [name, setName] = useState(props.name);
    const [setList, updateSetList] = useState(props.setList);
    // TODO use production style keys
    return(
        <section className="Setlist">
            {setList.map((song, ind) => 
                <div className="Setlist__Song" key={ind}>{song}</div>
            )}
        </section>
    );
}