import React from "react";
import Banner from "../Components/Banner/Banner";
import { BannerHeaderContainer } from "../Components/Banner/Banner.style";
import Courses from "../Components/courses/Couses";
import Goals from "../Components/Goals/Goals";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <BannerHeaderContainer>
        <Header />
        <Banner />
      </BannerHeaderContainer>
      <Goals />
      <Courses />
    </>
  );
};

export default Home;
