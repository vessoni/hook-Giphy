import React, { useState, useEffect } from "react";
import { FetchGifs } from '../../services/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 import { GifGalery } from './styles';

export default function GifList() {

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getGifs(){
      const data = await FetchGifs();

      if(data){
        setGifs(data);
        setLoading(false);
      }

    }
    getGifs();
  }, []);

  
  if (loading) {
    return (
      <div className="app"> 
        <h1>Loading...</h1>
        <ToastContainer autoClose={10000} hideProgressBar />
      </div>
   );
  }

  return (
    <GifGalery>
    {gifs.map(gif => (
        <a href={gif.url} key={gif.id}>
         <img src={gif.images.original.url} alt={gif.title} height={gif.images.original.height}  width={gif.images.original.width}/>
        </a>
    ))}
    </GifGalery>
  );
}