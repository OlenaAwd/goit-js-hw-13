import { API_KEY } from './key.js'
import { formSearch } from './common.js'
import { pageNumber } from './common.js'
import { quantityPerPage } from './common.js'

const url = 'https://pixabay.com/api/'

export async function fetchCollection() {
   const response = await fetch(`${url}?&key=${API_KEY}&q=${formSearch}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${quantityPerPage}&page=${pageNumber}`)
   if (!response.ok) {
      throw new Error(response.status)
   }
   return await response.json()
};