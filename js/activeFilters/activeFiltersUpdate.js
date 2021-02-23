import searchDataContainer from '../searchDataContainer/searchDataContainer';
import activeFiltersDelete from './activeFiltersDelete';

const activeFiltersUpdate = () => {
    const activeFiltersList = document.querySelector('.active-filters__list');
    activeFiltersList.innerHTML = '';
    
    const cutName = name => name.substring(name.indexOf('=') + 1);

    for (const filterName in searchDataContainer) {
        const filterVal = searchDataContainer[filterName];

        const addFilterToList = value => {
            const filterItem = document.createElement('li');
            filterItem.classList.add('active-filters__list-item');
            filterItem.dataset.filtersListValue = filterName;
            filterItem.innerHTML = `
                <p class="active-filters__list-item-name" data-filter-value=${value}>${value}</p>
                <i class="fas fa-times-circle"></i>
                `;
            activeFiltersList.appendChild(filterItem);
        };

        if (filterVal && !Array.isArray(filterVal) && cutName(filterVal) !== 'all' && filterName !== 'searchQ' && filterName !== 'numberOfPages') {
            addFilterToList(cutName(filterVal));
        }
        else if (Array.isArray(filterVal) && filterVal.length) {
            if (filterName === 'size') {
                const [width, height] = [...filterVal];
                const size = `Larger than: ${cutName(width)}x${cutName(height)}px`;
                addFilterToList(size);
            } else if (filterName === 'colors') {
                filterVal.forEach(color => {
                    addFilterToList(cutName(color))
                });
            };
        };
    };
    activeFiltersDelete();
};

export default activeFiltersUpdate;