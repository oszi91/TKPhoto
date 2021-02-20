const hideActiveFilters = () => {
    const activeFiltersList = document.querySelector('.active-filters__list');
    const activeFiltersSection = document.querySelector('.active-filters-section');

    if (activeFiltersList.children.length === 0) {
        activeFiltersSection.classList.add('active-filters-section--is-open');
    }
};

export default hideActiveFilters;