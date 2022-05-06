import {
    createHeadline,
} from './data.js';
import {
   getRandomNumber
} from './utils.js';

const headline = document.querySelector('.headline');

const picTemplate = document.querySelector('#headline')
    .content
    .querySelector('.headline-block');

const similarLinkFragment = document.createDocumentFragment();

const rendomInt = getRandomNumber(0,2)

const picElement = picTemplate.cloneNode(true);
picElement.querySelector('.headline__icon').src = createHeadline[rendomInt].url;
picElement.querySelector('.headline__header a').textContent = createHeadline[rendomInt].place;
picElement.querySelector('.headline__text').textContent = createHeadline[rendomInt].desc;


if (picElement.querySelector('.headline__header a').textContent.length > 10) {
    picElement.querySelector('.headline__header').style.left = '27%'
} else if (picElement.querySelector('.headline__header a').textContent.length > 7 && picElement.querySelector('.headline__header a').textContent.length <= 10) {
    picElement.querySelector('.headline__header').style.left = '35%'
}

similarLinkFragment.append(picElement);

headline.append(similarLinkFragment);