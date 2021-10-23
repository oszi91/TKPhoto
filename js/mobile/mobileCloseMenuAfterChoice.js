import mobileCloseMenu from './mobileCloseMenu';

const mobileCloseMenuAfterClick = () => {
	const filtersList = document.querySelectorAll(
		'.filters__category-list:not([data-filters-list-value="color"])>li'
	);
	const confirmColorsBtn = document.querySelector(
		'.filters__category-list--colors-confirm'
	);
	const confirmFormBtn = document.querySelector('.filters-form__confirm');

	confirmColorsBtn.addEventListener('click', mobileCloseMenu);
	confirmFormBtn.addEventListener('click', mobileCloseMenu);
	[...filtersList].forEach(item => {
		item.addEventListener('click', mobileCloseMenu);
	});
};

export default mobileCloseMenuAfterClick;
