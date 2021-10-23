const mobileCloseFilters = filters => {
	document
		.querySelector('.active-filters-section')
		.classList.remove('mobile-is-open--active-filters');
	filters.classList.remove('mobile-nav__filters--is-active');
};

export default mobileCloseFilters;
