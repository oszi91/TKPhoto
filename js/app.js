import '../sass/main.scss';
import galleryData from './galleryData';
import searchPhoto from './searchPhoto';
import loadMore from './loadMore';
import searchDataContainer from './searchDataContainer';
import filtersListHTML from './DOM/FiltersListHTML';

document.addEventListener('DOMContentLoaded', filtersListHTML);
galleryData(searchDataContainer);
searchPhoto();
loadMore();


