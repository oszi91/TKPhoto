import galleryData from './galleryData';
import searchDataContainer from './searchDataContainer';

const loadMore = () => {
    const button = document.querySelector('.load-more__btn');

    button.addEventListener('click', () => {
        searchDataContainer.numberOfPages++;
        galleryData(searchDataContainer);
    })
}

export default loadMore;