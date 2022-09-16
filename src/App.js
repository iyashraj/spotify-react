import './App.css';
import Login from './components/Login';
import {useState, useEffect} from 'react';
import {getTokenFromUrl} from './constant/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const stateTest = useSelector(state => console.log(state, "tring to fetch state"))
  const spotify = new SpotifyWebApi();
  const [token, setToken] = useState()
  const dispatch = useDispatch()

  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash="";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      // spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
    }

    console.log("token", _token);
    spotify.setAccessToken(_token);

    spotify.getMe().then((user)=>{
      dispatch({
        type: "SET_USER",
        user,
      });
    });
    spotify.getUserPlaylists().then((playlists)=> {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      })
    })

    spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist)=> {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playlist,
      })
    })
  },[])

  return (
    <div className="App">
      {/* {token?  <Login />: <h1>Loing</h1>} */}
      <Login />
      {/* {token? <Player spotify={spotify} />: <Login />} */}
    </div>
  );
}

export default App;
