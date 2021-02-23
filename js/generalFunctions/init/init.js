import '../../../sass/main.scss';
import galleryData from '../../API/galleryData';
import searchPhoto from '../../searchComponents/searchPhoto';
import loadMore from '../gallery/loadMore';
import searchDataContainer from '../../searchDataContainer/searchDataContainer';
import filtersListHTML from '../../htmlListGenerator/FiltersListHTML';
import hideShowHeader from '../hideShowHeader';
import mobile from '../../mobile/mobile';

const init = () => {
    document.addEventListener('DOMContentLoaded', filtersListHTML);
    galleryData(searchDataContainer);
    searchPhoto();
    loadMore();
    hideShowHeader();
    mobile();
};

export default init;