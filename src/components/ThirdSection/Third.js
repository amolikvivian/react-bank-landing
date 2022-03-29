import "./Third.css";
import AccountsSVG from "../../assets/accounts.svg";
import PayoutSVG from "../../assets/payouts.svg";

const Third = () => {
  return (
    <div className="third-container">
      <div className="row">
        <div className="col" data-aos="fade-left">
          <img src={AccountsSVG} alt="accounts" />
        </div>
        <div className="col" data-aos="fade-right">
          <h2>Manage multiple accounts</h2>
          <p>
            Salt regularly provides clients with deep-dived reports on financial
            spent and flags out faulty and suspicious transactions.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col" data-aos="fade-right">
          <img src={PayoutSVG} alt="accounts" />
        </div>
        <div className="col" data-aos="fade-left">
          <h2>Manage collection & payout</h2>
          <p>
            No need to have sleepless nights on month ends anymore. Manage
            expenses, collections, and payouts on the go around the world in
            real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
