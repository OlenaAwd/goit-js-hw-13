import { API_KEY } from './key.js'
import { formSearch } from './common.js'
import { pageNumber } from './common.js'
import { quantityPerPage } from './common.js'

const url = 'https://pixabay.com/api/'

export function fetchCollection() {
   return fetch(`${url}?&key=${API_KEY}&q=${formSearch}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${quantityPerPage}&page=${pageNumber}`)
      .then(response => {
         if (!response.ok) {
             throw new Error(response.status);
         }
         return response.json();
      })
};