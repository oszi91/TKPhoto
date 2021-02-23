import galleryData from '../galleryData';
import searchDataContainer from '../searchDataContainer';
import activeFiltersUpdate from '../activeFilters/activeFiltersUpdate';
import clearGallery from '../clearGallery';
import scrollToTop from '../generalFunctions/scrollToTop';
import activeFiltersNumber from '../mobile/activeFiltersNumber';

const galleryFiltersUpdate = (closeMenu) => {
    activeFiltersUpdate();
    clearGallery();
    galleryData(searchDataContainer);
    closeMenu.classList.add('filters__category-list--is-open');
    activeFiltersNumber();
    scrollToTop();
}

export default galleryFiltersUpdate;