import Link from "next/link";
import { footer, text, PlatziCheap, social } from "./styles";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="PlatziCheap">
        <p>2020 CHEAPFETCH, con 💚 de Platzi Master 18</p>
      </div>
      <div className="container">
        <div className="text">
          <p>About Us</p>
          <p>Help</p>
          <p>Follow Us</p>
        </div>
        <div className="social">
          <Link href="">
            <a className="social_link twitter">
              <img
                src="./images/icons8-twitter.svg"
                height={50}
                alt="Logo de Twitter"
              />
            </a>
          </Link>
          <Link href="">
            <a className="social_link facebook">
              <img
                src="../images/icons8-facebook.svg"
                height={50}
                alt="Logo de Facebook"
              />
            </a>
          </Link>
          <Link href="">
            <a className="social_link tiktok">
              <img
                src="../images/icons8-tik-tok.svg"
                height={50}
                alt="Logo de Tiktok"
              />
            </a>
          </Link>
          <Link href="">
            <a href="/" className="social_link instagram">
              <img
                src="../images/icons8-instagram.svg"
                height={50}
                alt="Logo de instagram"
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
