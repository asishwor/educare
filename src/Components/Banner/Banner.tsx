import { BannerStyle } from "./Banner.style";

const Banner = () => {
  return (
    <section className="container">
      <BannerStyle>
        <div className="left">
          <h1>Explore New Skills By Top Teachers</h1>
          <p>
            Online tutoring in Nepal's Best and largest platform The most
            comprehensive online learning plaform
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="right">
          <img src="./images/banner.jpg" alt="bannerImage" />
        </div>
      </BannerStyle>
    </section>
  );
};

export default Banner;
