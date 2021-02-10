import '../sass/main.scss';

const API = "20203630-3abf7923cd809498a39669ead";

function getData(){
    fetch(`https://pixabay.com/api/?key=${API}`)
    .then(data => data.json())
    .then(data => console.log(data));
};

getData();