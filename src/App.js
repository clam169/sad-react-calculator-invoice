import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Customer from './Components/Customer';

function App() {
  return (
    <div>
      <Calculator title="Sum" operator="+"></Calculator>
      <Calculator title="Minus" operator="-"></Calculator>
      <Calculator title="Product" operator="*"></Calculator>
      <Calculator title="Quotient" operator="/"></Calculator>

      <Customer></Customer>
    </div>
  );
}

export default App;
