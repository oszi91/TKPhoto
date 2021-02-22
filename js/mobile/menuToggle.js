const menuToggle = () => {
    const hamburgerMenu = document.querySelector('.mobile-nav__hamburger');
    const filtersMobileMenu = document.querySelector('.mobile-nav__filters');

    const isMenuOpen = () => {
        document.querySelector('.filters').classList.toggle('mobile-is-open--filters');
        document.querySelector('.search').classList.toggle('mobile-is-open--search-and-filters');
        document.querySelector('.header__container').classList.toggle('mobile-header--height');
        hamburgerMenu.classList.toggle('mobile-nav__hamburger--is-active');
    }

    const isFiltersMenuOpen = () => {
        document.querySelector('.active-filters-section').classList.toggle('mobile-is-open--active-filters');
        filtersMobileMenu.classList.toggle('mobile-nav__filters--is-active');

    };

    hamburgerMenu.addEventListener('click', isMenuOpen);
    filtersMobileMenu.addEventListener('click', isFiltersMenuOpen);
}

export default menuToggle;