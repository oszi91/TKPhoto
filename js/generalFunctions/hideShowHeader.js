const hideShowHeader = () => {
    const header = document.querySelector('.header');
    let prevPosition = window.pageYOffset;
    
    window.onscroll = () => {
        let currentPosition = window.pageYOffset;
        if (prevPosition > currentPosition) {
            header.style.top = "0";
        } else {
            header.style.top = "-120px";
        }
        prevPosition = currentPosition;
    };
};

export default hideShowHeader;