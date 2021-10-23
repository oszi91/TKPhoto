import closeMenuWhenClickOutside from './../generalFunctions/closeMenuWhenClickOutside';

const dropdownFilters = () => {
	const allfiltersList = document.querySelectorAll('.filters__list-item');

	allfiltersList.forEach(list => {
		const form = list.querySelector('.filters-form');

		list.addEventListener('click', e => {
			const menuIsOpen = e.target.children[1];
			const allMenuList = e.target.parentNode.querySelectorAll(
				'.filters__category-list'
			);

			if (!menuIsOpen) return;
			menuIsOpen.classList.toggle('filters__category-list--is-open');

			for (let menu of allMenuList) {
				if (menu !== menuIsOpen)
					menu.classList.add('filters__category-list--is-open');
			}

			if (form) {
				form.addEventListener('click', e => e.stopPropagation());
			}
		});
	});

	closeMenuWhenClickOutside();
};

export default dropdownFilters;
