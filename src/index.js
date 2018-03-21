import css from './css/main.css'; // eslint-disable-line

function component(type = 'div', attributes = {}, innerHTML = '') {
    const element = document.createElement(type);
    element.innerHTML = innerHTML;
    Object.entries(attributes).forEach((entry) => {
        element.setAttribute(entry[0], entry[1]);
    });

    return element;
}

const text = component('div', { class: 'text' }, '<span>Hello how are you!?</span>');
const img = component('img', { src: './static/whist.jpg', alt: 'Alt text!' }, '');

document.body.appendChild(text);
document.body.appendChild(img);
