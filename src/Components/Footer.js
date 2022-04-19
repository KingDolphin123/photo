import "../Css/Footer.css";
import pic1 from "../Css/insta.png";
import pic2 from "../Css/link.png";

const Footer = () =>{
    return(
        <div className = 'socials'>
            <a href="https://www.instagram.com/jlee_photo_/" target="_blank">
                <img className = "picture" src = {pic1}></img>
            </a>
            <a href="https://www.linkedin.com/in/jacob-lee-230984218/" target="_blank">
                <img className = "picture" src = {pic2}></img>
            </a>
        </div>
    )
}

export default Footer;