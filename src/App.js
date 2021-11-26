import {useState , useEffect } from 'react';
import TvSeries from './components/TvSeries';
import './App.css';
import HeadBar from './components/HeadBar';

function App() {

  const [tvState, setTvState] = useState([]);
  // const [result, setResult] = useState([]);

useEffect(() => {
    async function FetchApi() {
        let tvApi = await fetch('https://api.jikan.moe/v3/search/anime?q=naruto');
        let jsonApi = await tvApi.json();
        setTvState(jsonApi.results);
        // setCountry(jsonApi.Countries);

// { this is Appjs section for git}
    }
    FetchApi();
}, []);


  return (
  
      <div >
              {/* <HeadBar/> */}
        <TvSeries TvSeries={tvState}/>
      
      </div>
    );
}

export default App;
