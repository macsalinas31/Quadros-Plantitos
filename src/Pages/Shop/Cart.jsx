import { Link } from "react-router-dom";
import { Fade } from "@successtar/react-reveal";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

import "./cart.css";

export default function Cart() {

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
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <Fade delay={200} duration={1000} left cascade>
              <div>
                <MDBCard className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0">
                      Cart - 2 items
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            className="w-100"
                          />
                          <Link to="">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </Link>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>Blue denim shirt</strong>
                        </p>
                        <p>Color: blue</p>
                        <p>Size: M</p>

                        <MDBTooltip
                          wrapperProps={{
                            size: "sm",
                            style: { backgroundColor: "#492a14" },
                          }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon fas icon="trash" />
                        </MDBTooltip>
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <MDBBtn className="px-3 me-2 custom-btn" onClick={decrementQuantity}>
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>
                            <MDBInput
                              value={quantity}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                              
                              min={1}
                              label="Quantity"
                              ></MDBInput>
                            <MDBBtn className="px-3 ms-2 custom-btn" onClick={incrementQuantity}>
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </div>

                        <p className="text-start text-md-center">
                          <strong>$17.99</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>

                    <hr className="my-4" />
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      height="45px"
                      src="https://logos-download.com/wp-content/uploads/2020/06/GCash_Logo.png"
                      alt="GCASH"
                    />
                    {/* <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" /> */}
                    <MDBCardImage
                      className="me-2"
                      width="45px "
                      height="45px"
                      src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_Logo_2014.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
              </div>
            </Fade>
          </MDBCol>
          <MDBCol md="4">
          <Fade delay={400} duration={1500} right>
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush="true">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg" className="custom-btn">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
