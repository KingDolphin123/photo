import { react, useState } from "react";
import "../Css/Navmobile.css";
import logo from "../Css/drawiddng-4.png";

const Navmobile = () => {
  const [navscroll, setnavscroll] = useState("nav-top");
  const [logoscroll, setlogoscroll] = useState("logf-top");
  const [labelscroll, setlabelscroll] = useState("labe-top");

  // useEffect(() => {
  //   window.onscroll = () => {
  //     // if(navscroll === 1){
  //     //   if(window.pageYOffset ===0){
  //     //     setnavscroll("nav-top");
  //     //     console.log(navscroll);
  //     //   }
  //     // }
  //     // else{
  //     //   if(window.pageYOffset ===0){
  //     //     setnavscroll("nav-top");
  //     //     console.log(navscroll);
  //     //   }
  //     //   else{
  //     //     setnavscroll("nav");
  //     //     console.log(navscroll);
  //     //   }

  //     // }
  //       if(window.pageYOffset <=1){
  //         setnavscroll("nav-top");
  //         console.log(navscroll);
  //       }
  //       else if (window.pageYOffset >=1){
  //         setnavscroll('nav');
  //       }
  //   return () => (window.onscroll = null);
  //   }
  // });

  window.addEventListener(
    "scroll",
    function () {
      if (this.window.scrollY > 50) {
        if (navscroll !== "nav") {
          setnavscroll("nav");
          setlogoscroll("logf");
          setlabelscroll("labe");
        }
      } else if (this.window.scrollY < 50) {
        if (navscroll !== "nav-top") {
          setnavscroll("nav-top");
          setlogoscroll("logf-top");
          setlabelscroll("labe-top");
        }
      }
      return () => window.removeEventListener("scroll");
    },
    { once: false }
  );
  return (
    <div>
      <div className={navscroll}>
        <img className={logoscroll} src={logo} alt="logo" />
        <div className="nav2">
          <p className={labelscroll}>Home</p>
          <p className={labelscroll}>About</p>
          <p className={labelscroll}>Packages</p>
          <p className={labelscroll}>Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Navmobile;
