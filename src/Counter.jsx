import React, {useState} from 'react'
import { useSelector } from 'react-redux';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const increment = () => {}

    const decrement = () => {}

    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'gray', margin: '10px' }}>
                <h3>The count is: {count} </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
                
            </div>
            
        </React.Fragment>
    );
}

export default Counter;