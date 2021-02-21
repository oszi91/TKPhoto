import notFound from './notFound';

const showGalleryResults = (data) => {
    const results = data.hits;
    const numberOfResults = document.querySelector('.active-filters__name--hits');
    const galleryContainer = document.querySelector('.gallery');
    const loadMoreBtn = document.querySelector('.load-more__btn');
    const footer = document.querySelector('.footer');

    if (results.length === 0) {
        notFound(galleryContainer, loadMoreBtn, footer);
    } else if (results.length < 20) {
        loadMoreBtn.classList.add('hide');
    } else if (galleryContainer.classList.contains('gallery--change-display')) {
        galleryContainer.classList.remove('gallery--change-display');
        loadMoreBtn.classList.remove('hide');
        footer.classList.remove('footer-not-found');
    } 

    results.forEach(item => {
        const galleryItemDiv = document.createElement('div');
        galleryItemDiv.classList.add('gallery__item');
        galleryItemDiv.innerHTML = `
            <img class="gallery__item-img" src="${item.webformatURL}" alt="${item.tags}">
            <div class="gallery__item-data">
                <a href="https://pixabay.com/users/${item.user}-${item.user_id}">
                    <div class="author">
                        <img class="author__img" src="${item.userImageURL === "" ? item.previewURL : item.userImageURL}" alt="${item.user}">
                        <p class="author__name">${item.user}</p>
                    </div>  
                    <div class="download-image">
                        <a target="_blank" href="${item.largeImageURL}">HQ</a>
                    </div>
                </a>
            </div>
            `
        galleryContainer.appendChild(galleryItemDiv);
    })

    if(results.length !== 0){
        numberOfResults.textContent = data.totalHits;
    } else{
        numberOfResults.textContent = 0;
    }
    
}

export default showGalleryResults;