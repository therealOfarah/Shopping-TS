import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import make from '../images/make.jpg'
import mixed from '../images/mixed.jpg'
import download from '../images/download.jpg'
export function Home() {
  return (
    <>
    <div >
    <Carousel fade style={{display:"flex",justifyContent:"center", marginTop:"10vh"}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={download}
          alt="First slide"
          style={{maxWidth:"750px", maxHeight:"750px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={make}
          alt="Second slide"
          style={{maxWidth:"750px", maxHeight:"750px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mixed}
          alt="Third slide"
          style={{maxWidth:"750px", maxHeight:"750px"}}
        />
      </Carousel.Item>
    </Carousel>
    </div>

    </>
  );
}
