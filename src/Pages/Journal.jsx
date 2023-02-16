import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../Css/journal.css'


export default function Journal() {
  return (

    <div className="container" >
        <div className="row">
            <div className='col-4'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a succulent?
                    </MDBCardText>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-4'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a bonsai?
                    </MDBCardText>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
            <div className="col-4">
            <MDBCard className="box-border">
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a floor plant?
                    </MDBCardText>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
        </div>       
     </div>

     
  );
}