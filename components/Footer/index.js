import Link from "next/link";
import React from "react";
import { Footer, PlatziCheap, Social, Text } from "./styles";

const Footers = () => {
  return (
    <Footer>
      <PlatziCheap>
        <p>2020 CHEAPFETCH | Hecho con 💚 en Platzi Master | C5</p>
      </PlatziCheap>
      <Text>
        <p>About Us</p>
        <p>Help</p>
        <p>Follow Us</p>
      </Text>
      <Social>
        <Link href="">
          <a className="social_link twitter">
            <img
              src="images/icons8-twitter.svg"
              height={50}
              alt="Logo de Twitter"
            />
          </a>
        </Link>
        <Link href="">
          <a className="social_link facebook">
            <img
              src="images/icons8-facebook.svg"
              height={50}
              alt="Logo de Facebook"
            />
          </a>
        </Link>
        <Link href="">
          <a className="social_link tiktok">
            <img
              src="images/icons8-tik-tok.svg"
              height={50}
              alt="Logo de Tiktok"
            />
          </a>
        </Link>
        <Link href="">
          <a href="/" className="social_link instagram">
            <img
              src="images/icons8-instagram.svg"
              height={50}
              alt="Logo de instagram"
            />
          </a>
        </Link>
      </Social>
    </Footer>
  );
};

export default Footers;
