const imageHoverData = () => {
	const galleryImgList = document.querySelectorAll('.gallery__item');

	galleryImgList.forEach(img =>
		img.addEventListener('mouseenter', e => {
			e.currentTarget.children[1].classList.add('gallery__item-data--is-open');
		})
	);

	galleryImgList.forEach(img =>
		img.addEventListener('mouseleave', e => {
			e.currentTarget.children[1].classList.remove(
				'gallery__item-data--is-open'
			);
		})
	);
};

export default imageHoverData;
