import { Link } from "react-router-dom";
import { BannerStyle } from "./Banner.style";

const Banner = () => {
  return (
    <section className="container">
      <BannerStyle>
        <div className="banner__left">
          <h1>Explore New Skills By Top Teachers</h1>
          <p>
            Online tutoring in Nepal's Best and largest platform The most
            comprehensive online learning plaform
          </p>
          <Link to={"/courses"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="banner__right">
          <video src="./images/banner.mp4" controls></video>
        </div>
      </BannerStyle>
    </section>
  );
};

export default Banner;
