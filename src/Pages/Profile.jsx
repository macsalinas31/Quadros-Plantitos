import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import profilebg from "../assets/profilebg.jpg";
import Pulse from "@successtar/react-reveal/Pulse";

export default function Profile() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  return (
    <Pulse>
    <div className="vh-100">
      <MDBContainer className="container py-5 h-100 bg-image" style={{
        backgroundImage: "url(" + profilebg + ")",
        height: "800px",
        backgroundPosition: "bottom",
      }}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4" className='custom-font2'>{auth?.fname} {auth?.lname}</MDBTypography>
                <MDBCardText className="text-muted" style={{fontSize: '13px'}}>
                  {auth?.email}
                  {/* <span className="mx-2">|</span> <a href="#!">mdbootstrap.com</a> */}
                </MDBCardText> 
                <hr className='mb-4 custom-font2'/>
                {/* <MDBBtn rounded size="lg" className='custom-btn'>
                  Message now
                </MDBBtn> */}
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5 custom-font2">---</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5 custom-font2">---</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5 custom-font2">---</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
                <hr className='custom-font2'/>
                <div className="d-flex justify-content-center align-items-center">
                  <MDBCardText className="lead fw-normal mb-0 custom-font2">Purchase History</MDBCardText>
                </div> <hr className='mb-4 custom-font2'/>
                {/* <MDBRow>
                  {/* <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" /> */}
                  {/* </MDBCol>
                </MDBRow> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </Pulse>
  );
}