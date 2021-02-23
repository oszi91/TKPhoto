import API from './API';
import imageHoverData from './generalFunctions/imageHoverData';
import showGalleryResults from './showGalleryResults';
import mobileCloseMenuAfterClick from './mobile/mobileCloseMenuAfterChoice';

const galleryData = async (searchDataContainer) => {
    // document.querySelector('.active-filters-section').style.display = 'block';
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
        if (resp.ok) {
            const data = await resp.json();
            const gallery = data.hits;
            console.log(data);
            showGalleryResults(data);
            imageHoverData();
            mobileCloseMenuAfterClick();
        } else {
            throw new Error(`Http error: ${resp.status}`);
        }
    } catch (err) {
        console.error(err);
    }
};

export default galleryData;