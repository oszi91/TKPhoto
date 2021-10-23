const scrollToTop = () => {
	if (window.innerWidth < 769) {
		setTimeout(window.scrollTo(0, 0), 1000);
	} else {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
};

export default scrollToTop;
