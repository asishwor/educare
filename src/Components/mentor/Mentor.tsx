import { useState, useEffect } from "react";

import { MentorData, MentorStyles } from "./Mentor.style";
import MentorD from "../../jsonFiles/mentor.json";

const Mentor = () => {
  type mentor = {
    name: string;
    proff: string;
    image: string;
  };
  const [mentorData, setMentorData] = useState<mentor[]>(MentorD);

  // fetching data from json and set state

  return (
    <>
      <div className="container">
        <MentorStyles>
          <div className="mentor__header">
            <h2>Our Experince & Proffessional Mentors</h2>
            <p>
              The mentors we selected came from diverse educational backgrounds
              and have been working their field for more than years . They were
              selected based on their achievements and also their practical
              skills based on real world experiences.
            </p>
          </div>
          {/* mentor's profile */}
          <MentorData>
            {mentorData.map((data, index) => {
              const { name, image, proff } = data;
              return (
                <div className="mentor__card" key={index}>
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="name">{name}</div>
                  <div className="proff">{proff}</div>
                </div>
              );
            })}
          </MentorData>
        </MentorStyles>
      </div>
    </>
  );
};

export default Mentor;
