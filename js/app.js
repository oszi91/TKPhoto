import '../sass/main.scss';
import galleryData from './galleryData';
import searchPhoto from './searchPhoto';
import loadMore from './loadMore';
import searchValuesArr from './searchDataContainer';
import filtersListHTML from './DOM/FiltersListHTML';

document.addEventListener('DOMContentLoaded', filtersListHTML);
galleryData(searchValuesArr);
searchPhoto();
loadMore();


