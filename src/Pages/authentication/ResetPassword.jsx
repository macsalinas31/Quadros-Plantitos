import React from 'react';
import '../../Css/Login.css';
import loginImage from '../../assets/succulent.jpg'
import mainLogo from "../../assets/logo-weed-with.png"
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  oldpassword: yup.string().required("Please enter your current password"),
  password: yup.string().required("Please enter password").min(6),
  password2: yup.string().oneOf([yup.ref("password")], "Password did not match.").required("You need to confirm your password.")
}).required();

export default function ResetPassword() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert(data);
  }
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

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Reset Password</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBInput wrapperClass=' mx-5 w-100' label='Old Password' id='formControlLg' type='password' size="lg" {...register("oldpassword")}/>
              <p className='form-err-msg mx-5 w-100'>{errors.oldpassword?.message}</p>
              <MDBInput wrapperClass='mt-4 mx-5 w-100' label='New Password' id='formControlLg' type='password' size="lg" {...register("password")}/>
              <p className='form-err-msg mx-5 w-100'>{errors.password?.message}</p>
              <MDBInput wrapperClass='mt-4 mx-5 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg" {...register("password2")}/>
              <p className='form-err-msg mx-5 w-100'>{errors.password2?.message}</p>

              <MDBBtn className="mt-4 mb-4 px-5 mx-5 w-100 custom-btn" size='lg'>Reset Password</MDBBtn>
            </form>
            <p className='ms-5'> <Link to="/" className="link-custom">Back to Home.</Link></p>
          
           
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
