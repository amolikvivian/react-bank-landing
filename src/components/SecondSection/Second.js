import "./Second.css";

const Second = () => {
  return (
    <div className="second-container">
      <div
        className="text-container"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div>
          <h1 className="main-text white-text">
            A banking solution,
            <br />
            for those who build.
          </h1>
          <p className="sub-text white-grey-text">
            We want finance to be a seamless experience for everyone.
            <br />
          </p>
          <p className="sub-text white-grey-text">
            So we will take care of all business jargon and complex codes for
            you <br />
            while you relax.
          </p>
        </div>
      </div>
      {/* <div
        className="center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <CustomButton name="Get Started Now!" type="white" />
      </div> */}
    </div>
  );
};

export default Second;
