import React from 'react';
import '../../Css/Login.css';
import loginImage from '../../assets/succulent.jpg'
import mainLogo from "../../assets/logo-weed-with.png"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>
           
       <MDBRow className='d-flex justify-content-center'>
        <MDBCol sm="12" lg="10" xxl='7'>
          <div className='d-flex flex-row ps-5 pt-5 ' >
            <img src={mainLogo} width="90%" alt="healing for everyone"></img>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sign Up</h3>

            <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' label='First name' id='formControlLg' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Last name' id='formControlLg' type='text'/>
                </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email' id='form3' type='email'/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Confirm Email' id='form4' type='email'/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='form5' type='password'/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Confirm Password' id='form6' type='password'/>


            <div className='d-flex justify-content-center mb-2'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Accept our Terms and Conditions' />
            </div>
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='success' size='lg'>Sign Up</MDBBtn>
            
            <p className='ms-5'>Already registered? <a href="#!" class="link-success">Login here</a></p>

          </div>
          </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol sm='6' style={{overflow: 'hidden', height: '100vh'}} className='d-none d-sm-block px-0'>
          <img src={loginImage}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'center', minHeight: '100vh', backgroundAttachment: 'fixed'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;