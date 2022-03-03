import { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar'

function App() {
 
  return (
    <div className="App">
      {/* {navbar} */}
    {/* {banner} */}
    {/* <Banner/> */}
    <Navbar/>

    <Row title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}/>   
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>   
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>   
    <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>   
    <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>   
    <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>   
    <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>   
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>   
    </div>
  );
}

export default App;
