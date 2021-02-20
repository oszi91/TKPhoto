import galleryFiltersUpdate from './galleryFiltersUpdate';
import sizeFiltersSearch from './sizeFiltersSearch';
import searchDataContainer from './../searchDataContainer';
import filterClassActive from './filterClassActive';

const filtersValue = () => {
    const filtersCategoryList = document.querySelectorAll('.filters__category-list');
    sizeFiltersSearch();

    filtersCategoryList.forEach(listVal => {
        const selectFilter = (e) => {
            const filter = e.target;
            const activeFilters = e.target.parentNode.querySelector('.filters__category-list-item--color-is-checked');
            
            const filterCategory = e.target.parentNode.dataset.filtersListValue;
            const filterValue = e.target.dataset.filterValue;
            const closeMenu = e.target.parentNode;

            const typeVal = `&image_type=${filterValue}`;
            const orientationVal = `&orientation=${filterValue}`;
            const categoryVal = `&category=${filterValue}`;
            const colorsVal = `&colors=${filterValue}`;
            const orderVal = `&order=${filterValue === `editor's choice` ? 'ec' : filterValue}`;

            switch (filterCategory) {
                case 'type':
                    filterClassActive(filter, activeFilters);
                    searchDataContainer.type = typeVal;
                    galleryFiltersUpdate(closeMenu, filterValue);
                    break;
                case 'orientation':
                    filterClassActive(filter, activeFilters);
                    searchDataContainer.orientation = orientationVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'category':
                    filterClassActive(filter, activeFilters);
                    searchDataContainer.category = categoryVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'color':
                    const indexValue = searchDataContainer.colors.indexOf(colorsVal);
                    const colorsArr = searchDataContainer.colors;

                    if (indexValue === -1) {
                        const color = colorsVal === '&colors=confirmColor' ? '' : colorsVal;
                        if (color) {
                            colorsArr.push(colorsVal);
                            if (filterValue !== 'confirmColor') {
                                e.target.classList.add('filters__category-list-item--color-is-checked')
                            }
                        }
                    } else {
                        colorsArr.splice(indexValue, 1)
                        e.target.classList.remove('filters__category-list-item--color-is-checked')
                    }

                    if (filterValue === 'confirmColor') {
                        galleryFiltersUpdate(closeMenu);
                    }
                    break;
                case 'order':
                    filterClassActive(filter, activeFilters);
                    searchDataContainer.order = orderVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
            }
        }
        listVal.addEventListener('click', selectFilter);
    })
}

export default filtersValue;