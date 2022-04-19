import {react, useState} from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Homemobile from "./Components/Homemobile";
import Navmobile from "./Components/Navmobile";
import Footer from "./Components/Footer";


import './App.css';



function App() {
  // const [checkwid, setcheck] = useState(window.innerWidth);
  const [width,setwidth] = useState(((window.innerWidth>600) ? false:true));
  // const setw = ()=>{
  //   setcheck(window.innerWidth);
  // }
  const set = () =>{
    if(window.innerWidth > 600){
      setwidth(false);
    }
    else if(window.innerWidth < 600){
      setwidth(true);
    }
  }
  window.addEventListener("resize", set);
  return (
    <div>
        {/* {checkwid}
        <button onClick = {setw}>setwid</button> */}
        {width ? <Navmobile />: <Nav />}
        {width ? <Homemobile /> : <Home />}
        <Footer />
    </div>
  );
}

export default App;
