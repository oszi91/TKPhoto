import galleryData from '../galleryData';
import searchDataContainer from '../searchDataContainer';

const galleryFiltersUpdate = (closeMenu) => {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
    galleryData(searchDataContainer);
    closeMenu;
}

export default galleryFiltersUpdate;