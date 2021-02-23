import galleryData from '../API/galleryData';
import searchDataContainer from '../searchDataContainer/searchDataContainer';
import activeFiltersUpdate from '../activeFilters/activeFiltersUpdate';
import scrollToTop from '../generalFunctions/scrollToTop';
import activeFiltersNumber from '../mobile/activeFiltersNumber';
import clearGallery from './../generalFunctions/gallery/clearGallery';

const galleryFiltersUpdate = (closeMenu) => {
    activeFiltersUpdate();
    clearGallery();
    galleryData(searchDataContainer);
    closeMenu.classList.add('filters__category-list--is-open');
    activeFiltersNumber();
    scrollToTop();
};

export default galleryFiltersUpdate;