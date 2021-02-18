import searchDataContainer from './../searchDataContainer';
import galleryFiltersUpdate from './galleryFiltersUpdate';
import sizeFiltersSearch from './sizeFiltersSearch';

const filtersValue = () => {
    const filtersCategoryList = document.querySelectorAll('.filters__category-list');
    sizeFiltersSearch();

    filtersCategoryList.forEach(listVal => {
        const selectFilter = (e) => {
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
                    searchDataContainer.type = typeVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'orientation':
                    searchDataContainer.orientation = orientationVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'category':
                    searchDataContainer.category = categoryVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'color':
                    const indexValue = searchDataContainer.colors.indexOf(colorsVal);
                    const colorsArr = searchDataContainer.colors;

                    if (filterValue === 'all') {
                        colorsArr = [];
                    }
                    if (indexValue === -1) {
                        colorsArr.push(colorsVal)
                    } else {
                        colorsArr.splice(indexValue, 1)
                    }
                    galleryFiltersUpdate(closeMenu);
                    break;
                case 'order':
                    searchDataContainer.order = orderVal;
                    galleryFiltersUpdate(closeMenu);
                    break;
            }
        }

        listVal.addEventListener('click', selectFilter);
    })
}

export default filtersValue;