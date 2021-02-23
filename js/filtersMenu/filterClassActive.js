const filterClassActive = (filter, activeFilters) => {
    if (activeFilters) {
        activeFilters.classList.remove('filters__category-list-item--color-is-checked');
    }
    filter.classList.add('filters__category-list-item--color-is-checked');

  
};

export default filterClassActive;