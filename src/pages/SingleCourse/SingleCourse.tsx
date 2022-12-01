import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { LearningStyle, SinglePageContent } from "./SingleCourse.style";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
interface feature {
  title: string;
  content: string;
  icon:
    | "DescriptionIcon"
    | "PersonIcon"
    | "AccessTimeIcon"
    | "AccessTimeIcon"
    | "CreditCardIcon";
  discount?: string;
}
const SingleCourse = () => {
  const feature: feature[] = [
    {
      title: "Expert instruction",
      content: "4 skill-building courses",
      icon: "DescriptionIcon",
    },
    {
      title: "Self-paced",
      content: "Progress at your own speed",
      icon: "PersonIcon",
    },
    {
      title: "5 months",
      content: "Progress at your own speed",

      icon: "AccessTimeIcon",
    },
    {
      title: "$536.40 ",
      discount: "$596USD",
      content: "Progress at your own speed",
      icon: "CreditCardIcon",
    },
  ];
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [topHeight, setTopHeight] = useState<number>(0);
  const sticky = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const stickyElm = sticky.current;
    function stickyFunc() {
      console.log(isSticky);
      console.log(window.scrollY )
      if (stickyElm !== null) {
        setTopHeight(stickyElm.getBoundingClientRect().top);
        if (topHeight <= 0 && window.scrollY > 0) {
          setIsSticky(true);
        } else if (window.scrollY > 20) {
          setIsSticky(false);
        }
      }
    }
    window.addEventListener("scroll", stickyFunc);
  });

  return (
    <>
      <SinglePageContent>
        <section className="banner">
          <div className="overlay"></div>
          <div className="container">
            <h2>Learn the fundamentals of computer science</h2>
          </div>
        </section>

        {/* Sticky content */}
        <section className="stickyContent-section">
          <div className={isSticky ? "sticky" : ""} ref={sticky}>
            <div className="stickyContent">
              <div className="stickyContent__logo">
                <img src="./images/singlepageLogo.webp" alt="" />
              </div>
              <div className="stickyContent__right">
                <div className="stickyContent__right-content">
                  <p>Professional Certificate in</p>
                  <h4>Introduction to Python Programming</h4>
                </div>
                <div className="stickyContent__right-btn">
                  <button className="btn stickyContent__btn">
                    I'm interested <KeyboardArrowDownOutlinedIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  section what you'll learn */}
        <div className="container">
          <LearningStyle>
            <h3>What you will learn</h3>
            <div className="learningContent">
              <ul className="learningContent__list">
                <li>
                  The fundamental design cycle of computer science and computer
                  programming: writing code, executing it, interpreting the
                  results, and revising the code syntax based on the outcomes.
                </li>
                <li>
                  Usage of the fundamental atoms of programming: variables,
                  mathematical operators, logical operators, and boolean
                  arithmetic.
                </li>
                <li>
                  Control structures for developing dynamic programs, including
                  Python libraries: conditionals, loops, functions, and error
                  handling.
                </li>
                <li>
                  The core data structures for creating useful programs:
                  strings, lists, dictionaries, and file manipulation.
                </li>
                <li>
                  Previews of the next big topics in computer science:
                  object-oriented programming skills, and computer algorithms.
                </li>
                <button className="playBtn">
                  <PlayCircleIcon /> Play Video{" "}
                </button>
              </ul>
              {/* right side content */}
              <div className="learningContent__info">
                {feature.map((elm: feature, index) => {
                  const { title, discount, content, icon } = elm;
                  // to get icon
                  function getIcon() {
                    switch (icon) {
                      case "DescriptionIcon":
                        return <DescriptionIcon />;
                      case "PersonIcon":
                        return <PersonIcon />;
                      case "AccessTimeIcon":
                        return <AccessTimeIcon />;
                      case "CreditCardIcon":
                        return <CreditCardIcon />;
                      default:
                        throw new Error("invalid icon");
                    }
                  }
                  const SVG = getIcon(); //
                  return (
                    <div className="courses" key={index}>
                      {SVG}
                      <div className="courses__content">
                        <h4>
                          {title} <span>{discount}</span>
                        </h4>
                        <p>{content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </LearningStyle>
        </div>
      </SinglePageContent>
    </>
  );
};

export default SingleCourse;
