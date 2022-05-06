const darkBack = document.querySelector('.popUp-fade');
const popup = document.querySelector('.popUp');
const popUpClose = document.querySelector('.popUp__close');

const reviewsBig = document.querySelector('.popUp');

const reviewsBigTemplate = document.querySelector('#reviews-popup')
    .content
    .querySelector('.reviews-popup__item');

const similarFragmentBigReview = document.createDocumentFragment();
const reviewsBigElement = reviewsBigTemplate.cloneNode(true);

export const openReviews = ({
    url,
    header,
    desc,
    alt,
}) => {
    darkBack.style.display = "block";
    popup.style.display = "block";

    reviewsBigElement.querySelector('.item-popup__icon').src = url;
    reviewsBigElement.querySelector('.item-popup__header a').textContent = header;
    reviewsBigElement.querySelector('.item-popup__text').textContent = desc;
    reviewsBigElement.querySelector('.item-popup__icon').alt = alt;

    similarFragmentBigReview.append(reviewsBigElement);

    reviewsBig.append(similarFragmentBigReview);
};

popUpClose.addEventListener('click', () => {
    popup.style.display = "none";
    darkBack.style.display = "none";
    reviewsBigTemplate.innerHTML = '';
})