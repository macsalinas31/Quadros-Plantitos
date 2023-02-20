// react imports
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "../../api/axios";
import AuthContext from "../../context/Authprovider";

// assets and css
import "../../Css/Login.css";
import loginImage from "../../assets/succulent.jpg";
import mainLogo from "../../assets/logo-weed-with.png";

// react-hook
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MDBootstrap
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import { Alert } from "react-bootstrap";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide a valid email adress.")
      .required("Email is required"),
    password: yup
      .string()
      .required("Please enter password")
      .required("Password is required"),
  })
  .required();

const LOGIN_URL = '/user/auth';
export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [show, setShow] = useState(true);

  // const[email, setEmail] =useState("");
  // const[pass, setPass] =useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try{
      const res = await axios.post(LOGIN_URL,{data});
      console.log(res);
      // const roles = res?.data?.roles;
      reset();
      navigate("/");
    }
    catch(err){
      console.log(err);
      reset();
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol sm="12" lg="10" xxl="7">
              <div className="d-flex flex-row ps-5 pt-5 ">
                <img
                  src={mainLogo}
                  width="90%"
                  alt="healing for everyone"
                ></img>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBInput
                    wrapperClass="mt-4 mx-5 w-100 formControlLg"
                    label="Email address"
                    size="lg"
                    autoComplete="username"
                    {...register("email")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.email?.message}
                  </p>
                  <MDBInput
                    wrapperClass="mt-4 mx-5 w-100 formControlLg"
                    label="Password"
                    type="password"
                    size="lg"
                    autoComplete="current-password"
                    {...register("password")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.password?.message}
                  </p>

                  <MDBBtn className="mb-4 px-5 mx-5 w-100 custom-btn" size="lg">
                    Login
                  </MDBBtn>
                </form>
                <p className="small mb-5 pb-lg-3 ms-5">
                  <Link className="text-muted" to="/forgotPassword">
                    Forgot password?
                  </Link>
                </p>
                <p className="ms-5">
                    Don't have an account?{" "}
                  <Link to="/register" className="link-custom">
                    Register here
                  </Link>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol
          sm="6"
          style={{ overflow: "hidden", height: "100vh" }}
          className="d-none d-sm-block px-0"
        >
          <img
            src={loginImage}
            alt="Login image"
            className="w-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              minHeight: "100vh",
              backgroundAttachment: "fixed",
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
