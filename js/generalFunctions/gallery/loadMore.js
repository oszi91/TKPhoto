import galleryData from '../../API/galleryData';
import searchDataContainer from '../../searchDataContainer/searchDataContainer';

const loadMore = () => {
    const button = document.querySelector('.load-more__btn');
    let page = 3;
    button.addEventListener('click', () => {
        searchDataContainer.numberOfPages = `&page=${page++}`;
        galleryData(searchDataContainer);
    })
}

export default loadMore;