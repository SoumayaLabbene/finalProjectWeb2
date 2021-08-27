import { Carousel } from "react-bootstrap";
import "./Components.css";
const Carousell = () => {
    return (
      <>
        <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://www.loreal-finance.com/site/RA2017/app/uploads/2018/03/loreal_0095619_1165x480.jpg"
              alt="First slide"
              height="715px"
    />
    <Carousel.Caption>
      <h2 className="black">L'ORÉAL, <p>because I'm worth it</p></h2>
  
                
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.handsomefurs.com/wp-content/uploads/2020/01/shutterstock_778284355-collection-feat-696x503.jpg"
                alt="Second slide"
                height="715px"
              />
              <Carousel.Caption>
              <h2 className="black">REVOLUTION</h2>
       </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.needsandmoods.com/wp-content/uploads/2019/09/sephora-box-2019.jpg"
                alt="Third slide"
                height="715px"
    />
              <Carousel.Caption>
              <h2 className="black">SEPHORA</h2>
       </Carousel.Caption>
  </Carousel.Item>
          </Carousel>
          </div>
</>
                );
}
export default  Carousell;