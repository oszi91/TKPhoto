const closeMenuWhenClickOutside = () => {
    const filtersCategoryList = document.querySelectorAll('.filters__category-list');

    document.addEventListener('click', e => {
        if (e.target.className !== "filters__list-item" && e.target.className !== "filters__category-list-item filters__category-list-item--color-is-checked") {
            filtersCategoryList.forEach(item => {
                if (!item.classList.contains('filters__category-list filters__category-list--is-open')) {
                    item.classList.add('filters__category-list--is-open')
                } else {
                    return;
                };
            });
        };
    });
};

export default closeMenuWhenClickOutside;

