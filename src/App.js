import "./App.css";

const AnotherApp = () => {
  return (
    <div>
      <h2>Another component</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <AnotherApp />
    </div>
  );
}

export default App;
