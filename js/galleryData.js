import API from './API';
import showGalleryResults from './showGalleryResults';

const galleryData = async (searchDataContainer) =>  {
    let searchValues;
   
    if (searchDataContainer.searchQ){
        searchValues = `&q=${searchDataContainer.searchQ}`
        if(searchDataContainer.numberOfPages){
            searchValues = `&q=${searchDataContainer.searchQ}&page=${searchDataContainer.numberOfPages}`
        }
    } else if(searchDataContainer.numberOfPages){
        searchValues = `&page=${searchDataContainer.numberOfPages}`
    } 
    else{
        searchValues = ''
    }
    
    const resp = await fetch(`${API}${searchValues}`);
    const data = await resp.json();
    const gallery = data.hits;
    showGalleryResults(gallery);
};

export default galleryData;

