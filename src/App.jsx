import Setlist from './components/setlist/Setlist.jsx';
import Song from './components/song/Song.jsx';

export default function App(){
    return(
        <>
            <Setlist setList={[<Song title="Blinding Lights" artist="The Weeknd" />,
                            <Song title="Test Title 2" artist="Test Artist 2" />]} />
        </>
    )
}