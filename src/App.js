import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';

const employees = [
  {
    firstName: 'Ikenna',
    lastName: 'Odoh',
    age: '20'
  },
  {
    firstName: 'Ifeanyi',
    lastName: 'Okafo',
    age: '18'
  },
  {
    firstName: 'Abel',
    lastName: 'Ani',
    age: '16'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          employees.map((employee) => {
            return (
              <Employee key={employee.age} {...employee}/>
            );
          })
        } 
      </header>
    </div>
  );
}

export default App;
