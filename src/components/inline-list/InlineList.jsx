import './InlineList.css';
import React from 'react';

function InlineList({ children, items, keyProp = 'key' }) {
    return (
        <ul className="inline-list">
            {items.map(item => (
                <li className="inline-list-item" key={item[keyProp]}>
                    {children(item)}
                </li>
            ))}
        </ul>
    );
}

export default InlineList;
