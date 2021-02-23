import { hamburgerMenu } from './mobileValue';

const mobileCloseMenu = () => {
    document.querySelector('.filters').classList.remove('mobile-is-open--filters');
    document.querySelector('.search').classList.remove('mobile-is-open--search-and-filters');
    document.querySelector('.header__container').classList.remove('mobile-header--height');
    hamburgerMenu.classList.remove('mobile-nav__hamburger--is-active');
};

export default mobileCloseMenu;