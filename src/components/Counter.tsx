import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="counter-container">
            <h1>{count}</h1>
            <button type="button" className="button" onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
