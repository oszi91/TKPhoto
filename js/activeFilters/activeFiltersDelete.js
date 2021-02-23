import galleryData from '../API/galleryData';
import searchDataContainer from '../searchDataContainer/searchDataContainer';
import scrollToTop from '../generalFunctions/scrollToTop';
import activeFiltersNumber from '../mobile/activeFiltersNumber';
import clearGallery from './../generalFunctions/gallery/clearGallery';

const activeFiltersDelete = () => {
    const activeFilters = document.querySelectorAll('.active-filters__list-item');
   
    activeFilters.forEach(activeFilter => {
        activeFilter.addEventListener('click', e => {
            const filterItem = e.currentTarget;
            const filterType = filterItem.dataset.filtersListValue;

            const filterDataVal = filterItem.children[0].dataset.filterValue;
            const searchingDataVal = document.querySelector(`[data-filter-value=${filterDataVal}]`);

            searchingDataVal.classList.remove('filters__category-list-item--color-is-checked');      
            filterItem.remove();
            clearGallery();
            activeFiltersNumber();

            if (filterType === 'searchQ' || filterType === 'numberOfPages') {
                return;
            } else if (filterType === 'colors') {
                const val = `&colors=${e.currentTarget.children[0].textContent}`;
                const indexValue = searchDataContainer[filterType].indexOf(val);
                searchDataContainer[filterType].splice(indexValue, 1)
            } else if (filterType === 'size') {
                searchDataContainer[filterType] = [];
            } else {
                searchDataContainer[filterType] = '';
            };
            scrollToTop();
            galleryData(searchDataContainer);
        });
    });
};

export default activeFiltersDelete;