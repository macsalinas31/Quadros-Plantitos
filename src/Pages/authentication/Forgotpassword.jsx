
import '../../Css/Login.css';
import loginImage from '../../assets/succulent.jpg'
import mainLogo from "../../assets/logo-weed-with.png"
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

export default function ForgotPassword() {
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

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Forgot Password</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            

            <MDBBtn className="mb-4 px-5 mx-5 w-100 custom-btn" size='lg'>Continue</MDBBtn>
          
            <p className='ms-5'> <Link to="/login" className="link-custom">Back to sign in.</Link></p>

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
