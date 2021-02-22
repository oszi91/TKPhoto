import {menuIsOpen as menu} from "../mobile/menuToggle";

const dropdownFilters = () => {
    const allfiltersList = document.querySelectorAll('.filters__list-item');

    allfiltersList.forEach(list => {
        const form = list.querySelector('.filters-form');

        list.addEventListener('click', e => {
            const menuIsOpen = e.target.children[1];
            const allMenuList =  e.target.parentNode.querySelectorAll('.filters__category-list');

            // if(!menuIsOpen){
            //     document.querySelector('.filters').classList.toggle('mobile-is-open--filters');
            //     document.querySelector('.search').classList.toggle('mobile-is-open--search-and-filters');
            //     document.querySelector('.header__container').classList.toggle('mobile-header--height');
            //     // hamburgerMenu.classList.toggle('mobile-nav__hamburger--is-active');
            // }
          
        
            if (!menuIsOpen) return;
            menuIsOpen.classList.toggle('filters__category-list--is-open');
            
            for (let menu of allMenuList) {
                if (menu !== menuIsOpen) menu.classList.add('filters__category-list--is-open');
            }

            if (form) {
                form.addEventListener('click', e => e.stopPropagation());
            }
        })
    });
}

export default dropdownFilters;