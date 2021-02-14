const showGalleryResults = (results) => {
    const galleryContainer = document.querySelector('.gallery');

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
        <div class="download-btn">
            <a href="${item.largeImageURL}">Download</a>
        </div>
        </a>
    </div>
        `
        galleryContainer.appendChild(galleryItemDiv);
    })
}

export default showGalleryResults;