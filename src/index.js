import './sass/main.scss';
import photoCardTemp from './photocardtemp.hbs';
import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';


// const refs = {
//     gallery: document.querySelector('gallery'),
//     searchForm: document.querySelector('search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch)

// function onSearch (e) {
//     e.preventDefault();
// }

fetch('https://pixabay.com/api/?key=22578440-e1e5ecfa8eecbfc5a41a583d6&image_type=photo&orientation=horizontal&safesearch=true&per_page=40') 
    .then(response => {
        return response.json();
    })
    .then(photo => {
        console.log(photo);
        const markup = photoCardTemp(photo);
        console.log(markup);
    })
    .catch(error => {
        console.log(error);
    });