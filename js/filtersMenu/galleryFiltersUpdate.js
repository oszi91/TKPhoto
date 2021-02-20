import galleryData from '../galleryData';
import searchDataContainer from '../searchDataContainer';
import activeFiltersUpdate from '../activeFilters/activeFiltersUpdate';
import clearGallery from '../clearGallery';

const galleryFiltersUpdate = (closeMenu) => {
    const activeFiltersSection = document.querySelector('.active-filters-section');
    activeFiltersSection.classList.remove('active-filters-section--is-open');
 
    activeFiltersUpdate();
    clearGallery();
    galleryData(searchDataContainer);
    closeMenu.classList.add('filters__category-list--is-open');
}

export default galleryFiltersUpdate;