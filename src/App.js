import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';

const employees = [
  {
    id: '1',
    firstName: 'Ikenna',
    lastName: 'Odoh',
    age: '20'
  },
  {
    id: '2',
    firstName: 'UG',
    lastName: 'Odoh',
    age: '18'
  },
  {
    id: '3',
    firstName: 'TC',
    lastName: 'Odoh',
    age: '16'
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {
        employees.map((employee) => {
          const {id, firstName, lastName, age} = employee
          return(
            <Employee key={id} id={id} firstName={firstName} lastName={lastName} age={age} />
          )
        })
      }
      </header>
    </div>
  );
}

export default App;
