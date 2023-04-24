import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increment = () => setCounter((counter) => counter + 1);

    return(
        <div className={ classes.btn }>
            <p>{ counter }</p>
            <button onClick={ increment }>increment</button>
        </div>
    );
}

export default Counter;