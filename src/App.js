import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import { getUser } from './redux/ducks/user';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  const user = useSelector((state) => state.user.user);
  console.log(user)

  const count = useSelector((state) => state.counter.count);
  const voters = ['Amara Ekwunife', 'Chika Chikeluba', 'Ebuka Ogbodo']
  return (
    <div className="App">
      <header className="App-header">
      {user && <h1>Welcome { user.firstName } </h1>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
      {
        loggedIn ? (
          <div>
            <h1>{`Total Votes = ${count}`}</h1>
            {
              voters.map((voter) => 
                <Counter name={voter} />
              )
            }
          </div>
          
        ) : (
          <div>
            <h2>Login to continue</h2>
          </div>
          
        )
      }
      </header>
    </div>
  );
}

export default App;
