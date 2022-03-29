import "./First.css";
import GetStarted from "../GetStarted/GetStarted";

const First = () => {
  return (
    <div className="header-container" data-aos="fade-up">
      <div>
        <h1 className="main-text">
          Business Banking
          <br /> made simple.
        </h1>
        <p className="sub-text" data-aos="fade-up" data-aos-delay="800">
          Hassle free, no hidden payments, transparent and trustworthy
          <br /> banking for businesses, freelancers, and startups.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="1000">
        <GetStarted />
      </div>
      {/* <img src={World} alt="world" /> */}
    </div>
  );
};

export default First;
