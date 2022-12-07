import React from "react";
import Banner from "../Components/Banner/Banner";
import { BannerHeaderContainer } from "../Components/Banner/Banner.style";
import Courses from "../Components/courses/Couses";
import Cta from "../Components/CTA/Cta";
import FooterComponent from "../Components/footer/Footer";
import Goals from "../Components/Goals/Goals";
import Header from "../Components/Header/Header";
import Mentor from "../Components/mentor/Mentor";
import Testimonials from "../Components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <BannerHeaderContainer>
        <Header home />
        <Banner />
      </BannerHeaderContainer>
      <Goals />
      <Courses />
      <Mentor />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Home;
