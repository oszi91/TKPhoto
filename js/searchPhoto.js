import galleryData from './galleryData';
import searchValuesArr from './searchDataContainer';
import clearGallery from './clearGallery';
import scrollToTop from './generalFunctions/scrollToTop';

const searchPhoto = () => {
        const form = document.querySelector('.search-form');
        const searchInput = document.querySelector('.search-form__input');
        const searchFraze = document.querySelector('.active-filters__name--fraze');

        const searchHandle = (e) => {
                e.preventDefault();
                const searchValue = searchInput.value;

                if(!searchValue.length) return;
                searchValuesArr.searchQ = `&q=${searchValue}`;
                searchValuesArr.numberOfPages = `&page=2`;
                searchFraze.textContent = `'${searchValue}'`;
                galleryData(searchValuesArr);
                clearGallery();
                searchInput.value = '';
                scrollToTop();
        }

        form.addEventListener('submit', searchHandle);
        searchValuesArr.searchQ = '';   
}

export default searchPhoto;