const hideShowHeader = () => {
    const header = document.querySelector('.header');
    let prevPosition = window.pageYOffset;

    window.onscroll = () => {
        let currentPosition = window.pageYOffset;
        if (prevPosition > currentPosition) {
            header.style.top = "0";
        } else {
            if (window.innerWidth < 769) {
                header.style.top = "-80px";
            } else{
                header.style.top = "-120px";
            }
        }
        prevPosition = currentPosition;
    };
};

export default hideShowHeader;