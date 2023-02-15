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
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <Link to="/">
          <MDBNavbarBrand>
            <img src={logo} height="60" alt="MDB Logo" loading="lazy" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
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

          <form className="d-flex input-group w-auto">
            <Link to="/searchpage">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#B77445" }}
              >
                <MDBIcon fas icon="search" />
              </MDBBtn>
            </Link>
            <Link to="/searchpage">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#B77445" }}
              >
                <MDBIcon fas icon="shopping-cart" />
              </MDBBtn>
            </Link>
            <Link to="/searchpage">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#B77445" }}
              >
                <MDBIcon far icon="user" />
              </MDBBtn>
            </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;
