import Link from "next/link";
import React from "react";
import { Footer, PlatziCheap, Social, Text } from "./styles";

const Footers = () => {
  return (
    <Footer>
      <PlatziCheap>
        <p>2020 CHEAPFETCH, con 💚 de Platzi Master 18</p>
      </PlatziCheap>
      <Social>
        <Text>
          <p>About Us</p>
          <p>Help</p>
          <p>Follow Us</p>
        </Text>
        <Link href="">
          <a className="social_link twitter">
            <img
              src="images/twitter.svg"
              height={50}
              alt="Logo de Twitter"
              />
            </a>
          </Link>
          <Link href="">
            <a className="social_link facebook">
              <img
                src="images/facebook.svg"
                height={50}
                alt="Logo de Facebook"
              />
            </a>
          </Link>
          <Link href="">
            <a className="social_link tiktok">
              <img
                src="images/github.svg"
                height={50}
                alt="Logo de Tiktok"
              />
            </a>
          </Link>
          <Link href="">
            <a href="/" className="social_link instagram">
              <img
                src="images/instagram.svg"
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
