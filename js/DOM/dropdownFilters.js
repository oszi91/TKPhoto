const dropdownFilters = () => {
    const allfiltersList = document.querySelectorAll('.filters__list-item');

    allfiltersList.forEach(list => {
        list.addEventListener('click', e => {
            const menu = e.target.children[1];
            if (!menu) return;
            menu.classList.toggle('filters__category-list--is-open');
        })
    });
}

export default dropdownFilters;