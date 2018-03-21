import css from './css/main.css'; // eslint-disable-line

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'How are you?';
    return element;
}

document.body.appendChild(component());
