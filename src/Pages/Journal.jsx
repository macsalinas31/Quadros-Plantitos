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
import { Link } from 'react-router-dom';





export default function Journal() {
  return (

    <div className="container my-5" >
        <div className="row">
            <div className='col-4'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://assets.eflorist.com/site/32084100/assets/products/CZM_/sku4760117.jpg' position='top'height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a succulent?
                    </MDBCardText>
                   <Link to='/journalentry'>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-4'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://blog.japanwondertravel.com/wp-content/uploads/2021/05/Bonsai-Tree-1200x960.jpg' position='top' height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a bonsai?
                    </MDBCardText>
                    <Link to='/journalentry'>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </div>
            <div className="col-4">
            <MDBCard className="box-border">
                <MDBCardImage src='https://hips.hearstapps.com/hmg-prod/images/potted-snake-plants-inside-a-beautiful-new-flat-or-royalty-free-image-1659026388.jpg' position='top' height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Date here</MDBCardTitle>
                    <MDBCardText>
                    Searching for a floor plant?
                    </MDBCardText>
                    <Link to='/journalentry'>
                    <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </div>
        </div>       
     </div>
 
  );
}