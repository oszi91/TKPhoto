import galleryData from '../galleryData';
import searchDataContainer from '../searchDataContainer';

const galleryFiltersUpdate = (closeMenu) => {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
    galleryData(searchDataContainer);
    closeMenu.classList.add('filters__category-list--is-open');
}

export default galleryFiltersUpdate;