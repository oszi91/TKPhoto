import mobileCloseFilters from './mobileCloseFilters';
import { hamburgerMenu, filtersMobileMenu } from './mobileValue';

const mobileMenuToggle = () => {
    document.querySelector('.filters').classList.toggle('mobile-is-open--filters');
    document.querySelector('.search').classList.toggle('mobile-is-open--search-and-filters');
    document.querySelector('.header__container').classList.toggle('mobile-header--height');
    hamburgerMenu.classList.toggle('mobile-nav__hamburger--is-active');
    mobileCloseFilters(filtersMobileMenu);
};

export default mobileMenuToggle;
 