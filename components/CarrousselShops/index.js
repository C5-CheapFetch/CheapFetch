import { Slider, SlideTrack, Slide } from './styles'

export const CarrousselShops = () => {
  const images = [
    '/images/AliExpressCarroussel.png',
    '/images/AmazonCarroussel.png',
    '/images/BestBuyCarroussel.png',
    '/images/EbayCarroussel.png',
    '/images/GearBestCarroussel.png',
    '/images/MercadoLibreCarroussel.png',
    '/images/SamsCarroussel.png',
    '/images/WalmartCarroussel.png',
    '/images/WishCarroussel.png',
  ]
  return (
    <Slider>
      <SlideTrack>
        {images.map((img) => (
          <Slide>
            <img src={img} height='100' alt='shop' />
          </Slide>
        ))}
      </SlideTrack>
    </Slider>
  )
}
