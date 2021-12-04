import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';

const employee = {
    id: '1',
    firstName: 'Ikenna',
    lastName: 'Odoh',
    age: '20',
    contact: {
      phone: '+2348164114571',
      email: 'ikenna@tech.com',
      address: {
        street: '66 Chime Avenue',
        city: 'Enugwu',
        country: {
          id: '2',
          name: 'Nigeria',
          alias: 'NGR'
        }
      }
    }
  }

function App() {
  const {
    id: userId,
    firstName,
    lastName,
    age,
    contact: {phone, email, address: {
      street, city, country: {id: countryId, name, alias}
    }} 
   } = employee;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Detail</h1>
        <h4>SN: {userId}</h4>
        <h4>Name: {firstName} {lastName}</h4>
        <h4>Age: {age}</h4>
        <h4>Contact: {phone} ({alias})</h4>
        <h4>Address: {street}, {city}, {name} ({countryId})</h4>
      </header>
    </div>
  );
}

export default App;
