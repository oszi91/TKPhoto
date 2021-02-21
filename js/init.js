import '../sass/main.scss';
import galleryData from './galleryData';
import searchPhoto from './searchPhoto';
import loadMore from './loadMore';
import searchDataContainer from './searchDataContainer';
import filtersListHTML from './DOM/FiltersListHTML';
import hideShowHeader from './generalFunctions/hideShowHeader';

const init = () => {
    document.addEventListener('DOMContentLoaded', filtersListHTML);
    galleryData(searchDataContainer);
    searchPhoto();
    loadMore();
    hideShowHeader();
    // document.querySelector('.active-filters-section').style.display = 'none';
};

export default init;