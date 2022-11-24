import Setlist from './components/setlist/Setlist.jsx';
import Song from './components/song/Song.jsx';

export default function App(){
    return(
        <>
            <Setlist setList={[<Song title="Test Title 1" artist="Test Artist 1" />]} />
        </>
    )
}