import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import logo from "../assets/logo-weed-with.png";

function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <Link to="/"  className="order-1 order-lg-1">
          <MDBNavbarBrand>
            <img src={logo} height="60" alt="MDB Logo" loading="lazy" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          className="order-3 order-lg-2"
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight} className="order-4 order-lg-3">
          <MDBNavbarNav right fullWidth={false} className="mr-auto mb-2 mb-lg-0">
            <Link to="/shop">
              <MDBNavbarItem>
                <MDBNavbarLink>Shop</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/journal">
              <MDBNavbarItem>
                <MDBNavbarLink>Journal</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/contact">
              <MDBNavbarItem>
                <MDBNavbarLink>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
        <form className="d-flex flex-nowrap input-group w-auto order-2 order-lg-4">
            <Link to="/searchpage">
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#B77445", margin: "0px 20px" }}
              >
                <MDBIcon fas icon="search" />
              </MDBBtn>
            </Link>
            <Link to="/login">
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#B77445" }}
              >
                <MDBIcon far icon="user" />
              </MDBBtn>
            </Link>
            <Link to="/searchpage">
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "#B77445" }}
              >
                <MDBIcon fas icon="shopping-cart" />
              </MDBBtn>
            </Link>
          </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;
