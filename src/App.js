import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estoy empezando con React JS
        </p>
        <MyComponent> </MyComponent>
      </header>
    </div>
  );
}

export default App;
