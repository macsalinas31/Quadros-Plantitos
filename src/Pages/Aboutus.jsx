import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import succ from "../assets/succ.jpg";

export default function AboutUs() {
  return (
    <MDBContainer className="p-5 my-5">
      <MDBRow >
        <MDBCol sm="12" lg="6" className="mb-3">
            <div className="d-flex justify-content-center align-items-center" style={{overflow: "hidden"}}>
                <img src={succ} alt="" className="about__img" />
            </div>
        </MDBCol>
        <MDBCol sm="12" lg="6" className="mb-3">
          <div className="about__data">
            <h2 className="section__title about__title">
              Who we really are & <br /> why choose us
            </h2>

            <p className="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                We always deliver on time.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                We give you guides to protect and care for your plants.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                We always come over for a check-up after sale.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                100% money back guaranteed.
              </p>
            </div>

            <Link to="#" className="button--link button--flex">
              Shop Now <i className="ri-arrow-right-down-line button__icon"></i>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
