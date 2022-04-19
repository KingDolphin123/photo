import {react, useState} from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Homemobile from "./Components/Homemobile";
import './App.css';



function App() {
  const [checkwid, setcheck] = useState(window.innerWidth);
  const [width,setwidth] = useState(((window.innerWidth>600) ? false:true));
  const setw = ()=>{
    setcheck(window.innerWidth);
  }
  const set = () =>{
    if(window.innerWidth > 600){
      // if(width == true){
      //   setwidth(false);
      //   // setw();
      // }
      // else{
      //   return
      // }
      setwidth(false)
    }
    else if(window.innerWidth < 600){
      // if(width == false){
      //   setwidth(true);
      //   // setw();
      // }
      // else{
      //   return;
      // }
      setwidth(true);
    }
  }

  window.addEventListener("resize", set);
  return (
    <div>
        {checkwid}
        <button onClick = {setw}>setwid</button>
        <Nav />
        {width ? <Homemobile /> : <Home />}
    </div>
  );
}

export default App;
