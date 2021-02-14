const dropdownFilters = () => {
    const allfiltersList = document.querySelectorAll('.filters__list-item');
   
    allfiltersList.forEach(list => {
        list.addEventListener('click', e => {
            const allList = e.target.children[1];
            allList.classList.toggle('filters__category-list--is-open');
        })
    });
}

export default dropdownFilters;