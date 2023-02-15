import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import succ from "../assets/succ.jpg";

export default function AboutUs() {
  return (
    <MDBContainer className="p-5 my-5">
      <MDBRow >
        <MDBCol sm="12" lg="6" className="mb-3">
            <div className="d-flex justify-content-center align-items-center" style={{overflow: "hidden"}}>
                <img src={succ} alt="" class="about__img" />
            </div>
        </MDBCol>
        <MDBCol sm="12" lg="6" className="mb-3">
          <div class="about__data">
            <h2 class="section__title about__title">
              Who we really are & <br /> why choose us
            </h2>

            <p class="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>

            <div class="about__details">
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We always deliver on time.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We give you guides to protect and care for your plants.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                We always come over for a check-up after sale.
              </p>
              <p class="about__details-description">
                <i class="ri-checkbox-fill about__details-icon"></i>
                100% money back guaranteed.
              </p>
            </div>

            <a href="#" class="button--link button--flex">
              Shop Now <i class="ri-arrow-right-down-line button__icon"></i>
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
