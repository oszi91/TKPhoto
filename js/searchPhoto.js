import galleryData from './galleryData';
import searchValuesArr from './searchDataContainer';

const searchPhoto = () => {
        const form = document.querySelector('.search-form');
        const galleryContainer = document.querySelector('.gallery');
        const searchInput = document.querySelector('.search-form__input');
        
        const searchHandle = (e) => {
                e.preventDefault();
                const searchValue = searchInput.value;

                searchValuesArr.searchQ = searchValue;
                searchValuesArr.numberOfPages = 2;
                galleryData(searchValuesArr);

                galleryContainer.innerHTML = '';
                searchInput.value = '';
        }

        form.addEventListener('submit', searchHandle);
        searchValuesArr.searchQ = '';   
}

export default searchPhoto;