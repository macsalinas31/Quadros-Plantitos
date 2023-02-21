import React from 'react';
import Form from 'react-bootstrap/Form';
import { MDBFile,
         MDBBtn,
        MDBContainer,
        MDBCard,
        MDBCardBody,
        MDBCardImage,
        MDBRow,
        MDBCol,
        MDBInput,
        MDBTextArea
} from 'mdb-react-ui-kit';


export default function AddJournalEntry() {
    return (
        <MDBContainer>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://images.pexels.com/photos/5975986/pexels-photo-5975986.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height: '600px', width: '600px'}} alt="Journal photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Add Journal</h3>
                  <div className='d-md-flex ustify-content-start align-items-center mb-1'>
                  
                  </div>
                  <MDBCol md='12'>
                  <MDBInput wrapperClass='mb-4' label='Image URL Here' size='lg' id='form1' type='text'/>
                  </MDBCol>

                <MDBCol md='12'>
                    <MDBInput wrapperClass='mb-4' label='Title' size='lg' id='form1' type='text'/>
                </MDBCol>

                <MDBTextArea label='Message' id='textAreaExample' rows={4} />    

                <div className="d-flex justify-content-end pt-3">
                <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                <MDBBtn className='custom-btn' size='lg'>ADD</MDBBtn>
                </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    );
}