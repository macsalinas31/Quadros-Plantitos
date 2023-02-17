import { Link } from "react-router-dom";
import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import headerImage from "../assets/header-image-plants.jpg";

export default function Header() {
  return (
    <div
      className="p-5 text-center bg-image container"
      style={{
        backgroundImage: "url(" + headerImage + ")",
        height: "800px",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
            <MDBTypography
              tag="div"
              className="display-3 pb-3 mb-3 border-bottom"
            >
              Being Green,
              <br />
              Staying Clean.
            </MDBTypography>
            <MDBTypography blockquote className="mb-3">
              Plants are nature's way of showing us that great things can grow
              from small beginnings.
            </MDBTypography>

            <Link to="/shop">
              <MDBBtn
                rounded
                className="mx-2 custom-btn"
                style={{ backgroundColor: "#B77445" }}
              >
                Shop plants
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

///============[Oarallax Scripts]============//
