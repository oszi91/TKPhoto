import mobileCloseMenu from './mobileCloseMenu';
import { hamburgerMenu, filtersMobileMenu } from './mobileValue';

const mobileFiltersToggle = () => {
    document.querySelector('.active-filters-section').classList.toggle('mobile-is-open--active-filters');
    filtersMobileMenu.classList.toggle('mobile-nav__filters--is-active');
    mobileCloseMenu(hamburgerMenu);
};

export default mobileFiltersToggle;