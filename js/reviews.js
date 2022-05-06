import {
    createReviews,
} from './data.js';

import {
    openReviews,
} from './bic-reviews.js';

const reviews = document.querySelector('.reviews__list');

const reviewsTemplate = document.querySelector('#reviews')
    .content
    .querySelector('.reviews__item');

const similarFragment = document.createDocumentFragment();

createReviews.forEach(({
    url,
    header,
    desc,
    alt,
    id
}) => {
    const reviewsElement = reviewsTemplate.cloneNode(true);
    reviewsElement.querySelector('.item__icon').src = url;
    reviewsElement.querySelector('.item__header a').textContent = header;
    reviewsElement.querySelector('.item__text').textContent = desc;
    reviewsElement.querySelector('.item__icon').alt = alt;
    reviewsElement.setAttribute('data-id', id);

    similarFragment.append(reviewsElement);

    reviewsElement.addEventListener('click', () => openReviews({
        url,
        header,
        desc,
        alt,
        id
    }))



});

reviews.append(similarFragment);