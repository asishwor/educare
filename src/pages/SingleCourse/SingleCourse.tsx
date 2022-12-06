import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { LearningStyle, SinglePageContent } from "./SingleCourse.style";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Route, Routes } from "react-router-dom";
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

interface Courses {
  id: string;
  title: string;
  ratings: number;
  reviewCount: string;
  enrolledStudent: string;
  lectureLength: string;
  lectureClasses: string;
  lectureType: string;
  image: string;
  name: string;
  coursePrice: number;
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
  const [courses, setCourses] = useState<Courses[]>([]);
  useEffect(() => {
    fetch("./jsonFiles/courses.json")
      .then((res) => res.json())
      .then((course) => setCourses(course))
      .catch((err) => alert(err));
  });
  const [isSticky, setIsSticky] = useState<boolean>(false);
  // to make mutable varibles using usref
  const currentScroll = useRef(0);
  //update current scrolling value

  const scrollYFunc = () => {
    currentScroll.current = window.scrollY;
  };

  // Get sticky Element
  const stickyElm = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let end: number; // defined ending value
    window.addEventListener("scroll", () => {
      const rectTop = stickyElm.current?.getBoundingClientRect().top;
      scrollYFunc();
      if (rectTop !== undefined) {
        if (rectTop < -19) {
          currentScroll.current < end ? setIsSticky(true) : setIsSticky(false);

          end = currentScroll.current;
        } else {
          setIsSticky(false);
        }
      }
    });
  }, []);

  return (
    <>
      {courses.map((elem) => {
        return (
          <Routes>
            <Route
              path={`courses/${elem.id}`}
              element={
                "element"
                // <SinglePageContent key={elem.id}>
                //   <section className="banner">
                //     <div className="overlay"></div>
                //     <div className="container">
                //       <h2>{elem.title}</h2>
                //     </div>
                //   </section>
                //   {/* Sticky content */}
                //   <section className="stickyContent-section" ref={stickyElm}>
                //     <div className={isSticky ? "sticky" : ""}>
                //       <div className="stickyContent ">
                //         <div className="stickyContent__logo">
                //           <img src="./images/singlepageLogo.webp" alt="" />
                //         </div>
                //         <div className="stickyContent__right">
                //           <div className="stickyContent__right-content">
                //             <p>Professional Certificate in</p>
                //             <h4>Introduction to Python Programming</h4>
                //           </div>
                //           <div className="stickyContent__right-btn">
                //             <button className="btn stickyContent__btn">
                //               I'm interested <KeyboardArrowDownOutlinedIcon />
                //             </button>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </section>
                //   {/*  section what you'll learn */}
                //   <div className="container">
                //     <LearningStyle>
                //       <h3>What you will learn</h3>
                //       <div className="learningContent">
                //         <ul className="learningContent__list">
                //           <li>
                //             The fundamental design cycle of computer science and
                //             computer programming: writing code, executing it,
                //             interpreting the results, and revising the code
                //             syntax based on the outcomes.
                //           </li>
                //           <li>
                //             Usage of the fundamental atoms of programming:
                //             variables, mathematical operators, logical
                //             operators, and boolean arithmetic.
                //           </li>
                //           <li>
                //             Control structures for developing dynamic programs,
                //             including Python libraries: conditionals, loops,
                //             functions, and error handling.
                //           </li>
                //           <li>
                //             The core data structures for creating useful
                //             programs: strings, lists, dictionaries, and file
                //             manipulation.
                //           </li>
                //           <li>
                //             Previews of the next big topics in computer science:
                //             object-oriented programming skills, and computer
                //             algorithms.
                //           </li>
                //           <button className="playBtn">
                //             <PlayCircleIcon /> Play Video{" "}
                //           </button>
                //         </ul>
                //         {/* right side content */}
                //         <div className="learningContent__info">
                //           {feature.map((elm: feature, index) => {
                //             const { title, discount, content, icon } = elm;
                //             // to get icon
                //             function getIcon() {
                //               switch (icon) {
                //                 case "DescriptionIcon":
                //                   return <DescriptionIcon />;
                //                 case "PersonIcon":
                //                   return <PersonIcon />;
                //                 case "AccessTimeIcon":
                //                   return <AccessTimeIcon />;
                //                 case "CreditCardIcon":
                //                   return <CreditCardIcon />;
                //                 default:
                //                   throw new Error("invalid icon");
                //               }
                //             }
                //             const SVG = getIcon(); //
                //             return (
                //               <div className="courses" key={index}>
                //                 {SVG}
                //                 <div className="courses__content">
                //                   <h4>
                //                     {title} <span>{discount}</span>
                //                   </h4>
                //                   <p>{content}</p>
                //                 </div>
                //               </div>
                //             );
                //           })}
                //         </div>
                //       </div>
                //     </LearningStyle>
                //   </div>
                // </SinglePageContent>
              }
            />
          </Routes>
        );
      })}
    </>
  );
};

export default SingleCourse;
