import galleryData from '../galleryData';
import searchDataContainer from '../searchDataContainer';
import activeFiltersUpdate from '../activeFilters/activeFiltersUpdate';
import clearGallery from '../clearGallery';
import scrollToTop from '../generalFunctions/scrollToTop';

const galleryFiltersUpdate = (closeMenu) => {
    activeFiltersUpdate();
    clearGallery();
    scrollToTop();
    galleryData(searchDataContainer);
    closeMenu.classList.add('filters__category-list--is-open');
}

export default galleryFiltersUpdate;