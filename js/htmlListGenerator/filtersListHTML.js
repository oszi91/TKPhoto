import filtersData from './filtersData';
import dropdownFilters from '../filtersMenu/dropdownFilters';
import filtersValue from '../filtersMenu/filtersValue';

const filtersListHTML = () => {
    const filtersListContainer = document.querySelector('.filters__list');

    for (const category in filtersData) {
        const filtersListItem = document.createElement('li');
        filtersListItem.classList.add('filters__list-item');
        filtersListItem.innerHTML = `
        ${category} <i class="fas fa-chevron-circle-down"></i>`;

        const filtersCategoryList = document.createElement('ul');
        if (category === 'Size') {
            filtersCategoryList.classList.add('filters__category-list', 'filters__category-list--size', 'filters__category-list--is-open');
        } else {
            filtersCategoryList.classList.add('filters__category-list', 'filters__category-list--is-open');
        };
        filtersCategoryList.dataset.filtersListValue = category.charAt(0).toLowerCase() + category.slice(1);
        filtersListItem.appendChild(filtersCategoryList);

        filtersData[category].forEach(item => {
            const filtersCategoryListItem = document.createElement('li');
            if(item === 'all'){
                filtersCategoryListItem.classList.add('filters__category-list-item', 'filters__category-list-item--color-is-checked');
            } else{
                filtersCategoryListItem.classList.add('filters__category-list-item');
            }
            filtersCategoryListItem.dataset.filterValue = item;
            filtersCategoryListItem.textContent = item.charAt(0).toUpperCase() + item.slice(1);
            filtersCategoryList.appendChild(filtersCategoryListItem);
        });

        if(category === 'Size'){
            filtersCategoryList.innerHTML = `
                    <form class="filters-form">
                        <label>W</label>
                        <input class="filters-form__width" type="number"></input>
                        <label>H</label> 
                        <input class="filters-form__height" type="number"></input>px
                        <button class="filters-form__confirm">Ok</button>
                    </form> 
                    `
        };

        if(category === 'Color'){
            filtersCategoryList.innerHTML = `<button class="filters__category-list--colors-confirm" data-filter-value="confirmColor">Ok</button>` + filtersCategoryList.innerHTML;
        };

        filtersListContainer.appendChild(filtersListItem);
    };
    dropdownFilters();
    filtersValue();
};

export default filtersListHTML;