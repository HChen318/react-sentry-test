import logo from "./logo.svg";

import "./App.css";

function App() {
  const test = () => {
    console.log(window.test.wwwh);
  };

  return (
    <div className="App">
      {/* <TEST /> */}
      {/* <Header /> */}
      {/* <WWE /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-link" onClick={() => test()}>
          Learn React
        </div>
      </header>
    </div>
  );
}

export default App;
