import React from 'react';
import {
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import { Fade } from "@successtar/react-reveal";

export default function ShopItem() {

  const [quantity, setQuantity] = React.useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }


  return (
    <MDBContainer className="p-5 my-5">
        <MDBCol sm="12" lg="6">
       <MDBRow className='d-flex justify-content-start'>
            <Link to='/shop' block size="lg" className="mt-5 custom-font2">
                ← Back To Shop
            </Link>
      </MDBRow>
      </MDBCol>
      <MDBRow >
  
        <MDBCol sm="12" lg="6" className="mb-3 d-flex align-items-center justify-content-center">
        <Fade delay={200} duration={1500} left>
            <div className="d-flex justify-content-center align-items-center" style={{overflow: "hidden"}}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" alt="" className="about__img" style={{width: '100%'}} />
            </div>
            </Fade>
        </MDBCol>
        <MDBCol sm="0" lg="1"></MDBCol>
        <MDBCol sm="12" lg="4" className="mb-3 d-flex align-items-center justify-content-center text-center">
        <Fade delay={200} duration={1500} right>
          <div className="about__data">
            <h2 className="section__title about__title">
              Product Name
            </h2>

            <p className="about__description">
              $20.00
            </p>

            <div className="about__details">
              <p className="about__details-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, consectetur. Officia, exercitationem aliquid dignissimos itaque nihil a nemo deleniti eveniet?
              </p>
              <div className="d-flex justify-content-center" style={{ maxWidth: "100%" }}>
                            <MDBBtn className="px-3 me-2 custom-btn" onClick={decrementQuantity}>
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>
                            <MDBInput className='text-center'
                              value={quantity}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                              
                              min={1}
                              label="Quantity"
                              ></MDBInput>
                            <MDBBtn className="px-3 ms-2 custom-btn" onClick={incrementQuantity}>
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                </div>

                        <p className="text-start text-center">
                            Cost: <br />
                          <strong>${(17.99*quantity).toFixed(2)}</strong>
                        </p>
            </div>
            <MDBBtn block size="lg" className="custom-btn mb-4">
                            Add To Cart
            </MDBBtn>
            
          </div>
          </Fade>
        </MDBCol>
      </MDBRow>
      

    </MDBContainer>
  );
}