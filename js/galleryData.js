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
        order,
        size
    } = searchDataContainer;

    const searchData = `${API}${numberOfPages}${searchQ}${type}${orientation}${category}${colors.join('')}${order}${size.join('')}`;

    try {
        const resp = await fetch(searchData);
        console.log(resp);
        if (resp.ok) {
            const data = await resp.json();
            const gallery = data.hits;
            showGalleryResults(gallery);
        } else {
            throw new Error(`Http error: ${resp.status}`);
        }
    } catch (err) {
        console.error(err);
    }
};

export default galleryData;