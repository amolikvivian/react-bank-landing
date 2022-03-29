import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col">
          <h1>BANK.sy</h1>
          <p>
            Banksy is a pseudonymous England-based street artist, political
            activist and film director whose real name and identity remain
            unconfirmed and the subject of speculation.
          </p>
        </div>
        <div className="footer-col right-col">
          <div className="product-list">
            <p>Products</p>
            <li>Sample Product</li>
            <li>Another one of those</li>
            <li>The third one</li>
          </div>
          <div className="resource-list">
            <p>Resources</p>
            <li>Blogs</li>
            <li>Terms of Conditions</li>
            <li>Privacy Policy</li>
          </div>
          <div className="contact">
            <p>Contact</p>
            <span>
              Cobalt, 46/1, Church Street,
              <br />
              Bangalore, Karnataka
            </span>
            <br/>
            <span>(+91-9336466245)</span>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span>Copyright © 2021-22 Banksy and Arts.</span>
      </div>
    </footer>
  );
};

export default Footer;
