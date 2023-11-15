import { createElement } from 'react';

export default function Welcome() {
    return createElement(
        'div',
        {
            className: 'c-Welcome'
        },
        'Welcome on ',
        createElement('span', {
            style: { color: 'red' }
        }, 'PUISSANCE 4')
    );
}
