import axios from 'axios';
import { toast } from 'react-toastify';

const apiKey = 'LYrnCAjDXBFIwnkNQfn6zY2I9HUNVw3L';

export const trending = axios.create({
  baseURL: `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`,
});

export const search = axios.create({
  baseURL: `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}`,
});


export async function FetchGifs() {
  try {
    const response = await search.get('',{
      params: {
        q: 'dog',
        limit: '10'
      }
    });
    return response.data.data;

  } catch (error){
    toast.error(error.message)
    return;
  }
}