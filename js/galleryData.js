import API from './API';
import showGalleryResults from './showGalleryResults';

const galleryData = async (searchDataContainer) => {
    const {
        searchQ,
        numberOfPages,
        type,
        orientation,
        category,
        colors,
        order
    } = searchDataContainer;
    const searchData = `${API}${numberOfPages}${searchQ}${type}${orientation}${category}${colors.join('')}${order}`;

    const resp = await fetch(searchData);
    const data = await resp.json();
    const gallery = data.hits;
    showGalleryResults(gallery);
};

export default galleryData;