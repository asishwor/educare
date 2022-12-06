import { CtaStyle } from "./Cta.style";

const Cta = () => {
  return (
    <div className="container">
      <CtaStyle>
        <div className="cta__left">
          <h3>Ready to Join</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nam, velit fugit eum blanditiis quas vel ad harum eveniet esse.
          </p>
          <button className="btn btn-primary">Register Now</button>
        </div>

        {/* cta right side */}
        <div className="cta__right">
          <div className="cta__right-image">
            <img src="./images/profile.jpg" alt="" />
          </div>
          <div className="cta__right-design">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </CtaStyle>
    </div>
  );
};

export default Cta;
