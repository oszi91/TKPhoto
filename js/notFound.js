import searchDataContainer from './searchDataContainer';

const notFound = (gallery,loadMore,footer) => {
    loadMore.classList.add('hide');
    gallery.classList.add('gallery--change-display');
    footer.classList.add('footer-not-found');

    gallery.innerHTML = `    
    <div class="gallery__not-found">
        <h1 class="gallery__not-found__main-text">Sorry, we couldn't find any matches.</h1>
        <h2 class="gallery__not-found__text">Please, try again.</h2>
    </div>`;
    searchDataContainer.searchQ = '';
};

export default notFound;