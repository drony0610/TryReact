//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Header h3</h3>
        <p>input value is: {props.name}</p>
      </header>
    </div>
  );
}

export default App;
