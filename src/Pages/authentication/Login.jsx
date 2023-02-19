// react imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// assets and css
import '../../Css/Login.css';
import loginImage from '../../assets/succulent.jpg';
import mainLogo from "../../assets/logo-weed-with.png";

// react-hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// MDBootstrap
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const schema = yup.object({
  email: yup.string().email("Please provide a valid email adress.").required("Email is required"),
  password: yup.string().required("Please enter password").required("Password is required")
}).required();

export default function Login() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert(data);
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/"); 
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

            <h3 className="fw-normal ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <MDBInput wrapperClass='mt-2 mx-5 w-100' label='Email address' id='user-email' size="lg" autoComplete="off" {...register("email")}/>
                <p className='form-err-msg mx-5 w-100'>{errors.email?.message}</p>
                <MDBInput wrapperClass='mt-4 mx-5 w-100' label='Password' id='user-password' type='password' size="lg" autoComplete="off" {...register("password")}/>
                <p className='form-err-msg mx-5 w-100'>{errors.password?.message}</p>

                <MDBBtn className="mt-2 mb-1 px-5 mx-5 w-100 custom-btn" size='lg'>Login</MDBBtn>
              </form>
            <p className="small mb-3 pb-lg-3 ms-5"><Link className="text-muted" to="/forgotPassword">Forgot password?</Link></p>
            <p className='ms-5'>Don't have an account? <Link to="/register" className="link-custom">Register here</Link></p>

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
