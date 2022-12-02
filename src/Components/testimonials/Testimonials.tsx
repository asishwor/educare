import { useState, useEffect } from "react";
import { TestiomialsStyles } from "./Testimonials.style";

import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from "swiper/react";

//import module for swiper js
import { Navigation } from "swiper";

// import  mui icons
import StarIcon from "@mui/icons-material/Star";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
//create data types for state
type TestimonialsData = {
  image: string;
  heading: string;
  content: string;
  ratingStar: number;
  name: string;
  profileImage: string;
};

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsData[]>(
    []
  );

  // fetching data from json file
  useEffect(() => {
    fetch("./jsonFiles/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonialsData(data))
      .catch((err) => alert(err));
  }, []);

  // start Jsx :

  return (
    <div className="container">
      <TestiomialsStyles>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonialsData.map((element, index) => {
            const { image, heading, content, profileImage, name, ratingStar } =
              element;
            return (
              <SwiperSlide key={index}>
                <div className="testimonials">
                  <div className="testimonials__image">
                    <img src={image} alt="" />
                  </div>
                  <div className="testimonials__content">
                    <h4 className="testimonials__content-heading">{heading}</h4>
                    <p className="testimonials__content-comment">{content}</p>
                    <div className="testimonials__content-reviews">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <span className="starCount">{ratingStar}.0</span>
                    </div>
                    <div className="testimonials__content-reviewer">
                      <img src={profileImage} alt="profileImage" />
                      <div className="name">{name}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="navigation">
            <button className="swiper-button-prevs prev">
              <WestIcon />
            </button>
            <button className="swiper-button-nexts next">
              <EastIcon />
            </button>
          </div>
        </Swiper>
      </TestiomialsStyles>
    </div>
  );
};

export default Testimonials;
