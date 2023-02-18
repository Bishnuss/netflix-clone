import './App.css';
import React from 'react';
import Roww from './Roww';
import requests from './Request';
import Banner from './Banner';
import Naav from './Naav';

function App() {
  return (
    <div className="App">
      <header>
        <Naav></Naav>

      </header>


        <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>

      <Roww isLargeRow={true} title="Trending" fetchUrl={requests.fetchTrending}></Roww>
      <Roww title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals}></Roww>
      <Roww title="TopRated" fetchUrl={requests.fetchTopRated}></Roww>
      <Roww title="ActionMovies" fetchUrl={requests.fetchActionMovies}></Roww>
      <Roww title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}></Roww>
      <Roww title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}></Roww>
      <Roww title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}></Roww>
      <Roww title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Roww>


    </div>
  );
}

export default App;
