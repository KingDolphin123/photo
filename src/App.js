import Nav from "./Components/Nav";
import Home from "./Components/Home";
import './App.css';



function App() {
  var width = window.innerWidth;
  return (
    <div>
        <p>{width}</p>
        <Nav />
        <Home />
    </div>
  );
}

export default App;
