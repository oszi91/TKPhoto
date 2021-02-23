const activeFiltersNumber = () => {
    const activeFiltersListLength = document.querySelectorAll('.active-filters__list-item-name').length;
    const numberOfActiveFiltersText = document.querySelector('.mobile-nav__filters--number');

    numberOfActiveFiltersText.textContent = activeFiltersListLength === 0 ? '' : activeFiltersListLength;
};

export default activeFiltersNumber;