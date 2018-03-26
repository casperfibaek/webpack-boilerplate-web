import css from './css/main.css'; // eslint-disable-line

function comp(type, attributes, innerHTML) {
    const el = document.createElement(type);
    Object.entries(attributes).forEach((entry) => {
        el.setAttribute(entry[0], entry[1]);
    });
    if (innerHTML) { el.innerHTML = innerHTML; }
    el.add = function addTo(parent) {
        if (parent) {
            parent.appendChild(el);
        } else {
            document.body.appendChild(el);
        }
    };
    return el;
}

window.init = function init() {
    function component(type = 'div', attributes = {}, innerHTML = '') {
        const element = document.createElement(type);
        element.innerHTML = innerHTML;
        Object.entries(attributes).forEach((entry) => {
            element.setAttribute(entry[0], entry[1]);
        });

        return element;
    }

    (async function selfExec() {
        try {
            const url = 'http://dawa.aws.dk/adgangsadresser/autocomplete?q=foged&noformat&per_side=5';
            const adr = await fetch(url);
            const data = await adr.json();
            data.forEach((el) => {
                comp('div', { class: 'text' }, `<span>${JSON.stringify(el)}</span>`).addTo();
            });
        } catch (err) {
            console.error(err);
        }
    }());

    const objTest = {
        cats: 2,
        dogs: 8,
        car: 'toyota',
    };

    Object.entries(objTest).forEach((el) => {
        console.log(el[0], el[1]);
    });

    component('div', { class: 'text' }, '<span>Hello how are you!?</span>').addTo();
    component('img', { src: './static/whist.jpg', alt: 'Alt text!' }, '').addTo();

    const event = new Event('hello');

    document.body.addEventListener('hello', (e) => {
        console.log(e, 'event fired');
    });

    document.body.dispatchEvent(event);
}; if (window.initialize) { window.init(); }
