import "../Css/Home.css";
import pic1 from "../Css/photos/IMG_5065.jpg";
import pic2 from "../Css/photos/IMG_5102.jpg";
import pic3 from "../Css/photos/IMG_5390.jpg";
import pic4 from "../Css/photos/IMG_5920.jpg";
import pic5 from "../Css/photos/IMG_6011.jpg";
import pic6 from "../Css/photos/IMG_6253.jpg";
import pic7 from "../Css/photos/IMG_6305.jpg";
import pic8 from "../Css/photos/IMG_6894.jpg";
import pic9 from "../Css/photos/IMG_7043.jpg";
import pic10 from "../Css/photos/IMG_7061.jpg";
import pic11 from "../Css/photos/IMG_7163.jpg";
import pic12 from "../Css/photos/IMG_7205.jpg";
import pic13 from "../Css/photos/IMG_8262.jpg";
import pic14 from "../Css/photos/IMG_8383.jpg";
import pic15 from "../Css/photos/IMG_8528.jpg";
import pic16 from "../Css/photos/IMG_9098.jpg";
import pic17 from "../Css/photos/IMG_9146-1.jpg";
import pic18 from "../Css/photos/IMG_9238-1.jpg";
import pic19 from "../Css/photos/IMG_9293.jpg";
import pic20 from "../Css/photos/IMG_9314.jpg";


const Home = () => {
  let picarr = [pic1, pic4, pic7, pic10, pic13, pic16, pic19];
  let picarr2 = [pic2, pic6, pic11, pic14, pic17, pic20];
  let picarr3 = [pic3, pic8, pic9, pic12, pic15, pic18, pic5];
  let picarr11 = picarr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  let picarr12 = picarr2
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  let picarr13 = picarr3
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  return (
    <div className="bigdiv">
      <div className="col1">
        {picarr11.map((pic) => (
          <img className="pic" key={pic} src={pic} alt={pic} />
        ))}
      </div>
      <div className="col2">
        {picarr12.map((pic) => (
          <img className="pic" key={pic} src={pic} alt={pic} />
        ))}
      </div>
      <div className="col3">
        {picarr13.map((pic) => (
          <img className="pic" key={pic} src={pic} alt={pic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
