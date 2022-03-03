import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './requests';

function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
        }
        fetchData();
    },[])

    console.log(movie);
  return (
    <header >{/*background img */}

{/* img carosal */}
{/*            
             <div className="navbar">

             </div>
        */}
     
      {/* <Carousel>
       <img src='../src/img/img1.jpg' alt=''/>
      </Carousel>
  */}
  







    </header>
  )
}

export default Banner