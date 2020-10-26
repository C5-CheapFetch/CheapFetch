// import { Container, ImagesContainer, StoreImage } from "./styles";
import { Slider, SlideTrack, Slide } from "./styles";

export const CarrousselShops = () => {
  return (
    <Slider>
      <SlideTrack>
        <Slide>
          <img
            // /images/nombre_img.png
            src="/images/AliExpressCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="/images/AmazonCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="/images/EbayCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="/images/MercadoLibreCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="/images/SamsCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="/images/WalmartCarroussel.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
      </SlideTrack>
    </Slider>

    //   <h1>Search once, find everywhere</h1>
  );
};
