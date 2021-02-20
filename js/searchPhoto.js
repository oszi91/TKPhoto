import galleryData from './galleryData';
import searchValuesArr from './searchDataContainer';
import clearGallery from './clearGallery';

const searchPhoto = () => {
        const form = document.querySelector('.search-form');
        const searchInput = document.querySelector('.search-form__input');
        
        const searchHandle = (e) => {
                e.preventDefault();
                const searchValue = searchInput.value;

                searchValuesArr.searchQ = `&q=${searchValue}`;
                searchValuesArr.numberOfPages = `&page=2`;
                galleryData(searchValuesArr);

                clearGallery();
                searchInput.value = '';
        }

        form.addEventListener('submit', searchHandle);
        searchValuesArr.searchQ = '';   
}

export default searchPhoto;