import "./Fifth.css";
import Features from "../../assets/features.png";

const Fifth = () => {
  return (
    <div className="fifth-container">
      <img src={Features} alt="Features" width="550" data-aos="zoom-in-left" data-aos-duration="600" />
      <hr data-aos="fade-in" data-aos-duration="600" data-aos-delay="200"></hr>
      <p className="sub-text" data-aos="fade-in" data-aos-duration="600" data-aos-delay="200">
        We want finance to be a <b> seamless experience for everyone.</b><br/> So we will
        take care of all business jargon and complex codes for you while you
        relax.
      </p>
    </div>
  );
};

export default Fifth;
