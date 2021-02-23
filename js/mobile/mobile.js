import mobileMenuToggle from './mobileMenuToggle';
import mobileFiltersToggle from './mobileFiltersToggle';
import { hamburgerMenu, filtersMobileMenu } from './mobileValue';

const mobile = () => {
    hamburgerMenu.addEventListener('click', mobileMenuToggle);
    filtersMobileMenu.addEventListener('click', mobileFiltersToggle);
};

export default mobile;