import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';


const Counter = (props) => {
    const { name } = props
    const [ votes, setVotes ] = useState(0)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
        setVotes(votes + 1);
    };

    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes - 1);
    };

    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'gray', margin: '10px' }}>
                <h2>{name}</h2>
                <h5>{`Votes: ${votes}`}</h5>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
                
            </div>
            
        </React.Fragment>
    );
}

export default Counter;