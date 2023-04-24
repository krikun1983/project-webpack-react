import React, { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => setCounter((counter) => counter + 1);

    return(
        <div>
            <p>{counter}</p>
            <button onClick={ increment }>increment</button>
        </div>
    );
}

export default Counter;