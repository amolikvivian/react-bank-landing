import "./Fourth.css";
import RegisterIcon from "../../assets/icons/user.svg";
import KYCIcon from "../../assets/icons/kyc.svg";
import BankingIcon from "../../assets/icons/done.svg";

const Fourth = () => {
  return (
    <div className="fourth-container">
      <div className="row-fourth">
        <div className="col-fourth" data-aos="fade-up" data-aos-duration="600">
          <img src={RegisterIcon} alt="Register" className="icon-img" />
          <div className="caption-text">
            <h3>Register</h3>
            <p>Share a few more details to finish off the final step.</p>
          </div>
        </div>
        <div className="col-fourth" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <img src={KYCIcon} alt="KYC" className="icon-img" />
          <div className="caption-text">
            <h3>Wrap Up KYC</h3>
            <p>Share a few more details to finish off the final step.</p>
          </div>
        </div>
        <div className="col-fourth" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
          <img src={BankingIcon} alt="Banking" className="icon-img" />
          <div className="caption-text">
            <h3>Banking on the Go!</h3>
            <p>Share a few more details to finish off the final step.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fourth;
