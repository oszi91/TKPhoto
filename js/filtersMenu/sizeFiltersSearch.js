import searchDataContainer from '../searchDataContainer';
import galleryFiltersUpdate from './galleryFiltersUpdate';

const sizeFiltersSearch = () => {
    const formSize = document.querySelector('.filters-form');
    const widthInput = document.querySelector('.filters-form__width');
    const heightInput = document.querySelector('.filters-form__height');

    formSize.addEventListener('submit', e => {
        e.preventDefault();
        const closeMenu = e.target.parentNode;
        const sizeArr = searchDataContainer.size;

        const widthVal = `&min_width=${widthInput.value === '' ? 0 : widthInput.value }`;
        const heightVal = `&min_height=${heightInput.value  === '' ? 0 : heightInput.value }`;

        if (!widthInput.value.length && !heightInput.value.length) return;

        if (sizeArr.length === 0) {
            sizeArr.push(widthVal, heightVal);
        } else{
            sizeArr[0] = widthVal;
            sizeArr[1] = heightVal;
        }
        
        galleryFiltersUpdate(closeMenu);
        widthInput.value = '';
        heightInput.value = '';
    });
};

export default sizeFiltersSearch;