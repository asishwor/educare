import { Footer } from "./Footer.Style";

const FooterComponent = () => {
  return (
    <div className="container">
      <Footer>
        <div className="footer">
          <div className="footer__info">
            <div className="footer__logo">
              <img src="./images/logo.png" alt="" />
            </div>
            <p className="footerPara">
              A learning platform for offering proffessional development wishing
              to grow in your career
            </p>
            <div className="appLink">
              <div className="playstore">
                <a href="">
                  <img src="./images/playstore.png" alt="" />
                </a>
              </div>
              <div className="appStore">
                <a href="">
                  <img src="./images/appstore.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/*Quick Links */}
          <div className="footer__quickLinks">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Notes</a>
              </li>
              <li>
                <a href="">Certificates</a>
              </li>
            </ul>
          </div>
          {/*  Other Links */}
          <div className="footer__otherLinks">
            <h4>Others</h4>
            <ul>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Offer</a>
              </li>
              <li>
                <a href="">Privacy & Policy</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
            </ul>
          </div>
          {/* Community */}
          <div className="footer__community">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="">contact - <span>1690</span></a>
              </li>
              <li>
                <a href="">SMS - <span>EcHelp to 26969()</span></a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
