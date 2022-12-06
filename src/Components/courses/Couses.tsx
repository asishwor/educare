import { useEffect, useState } from "react";
import { CousesStyles } from "./Courses.styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { Link, Outlet } from "react-router-dom";

interface course {
  id: string;
  title: string;
  reviewCount: string;
  enrolledStudent: number;
  lectureLength: string;
  lectureClasses: string;
  lectureType: string;
  image: string;
  name: string;
  ratings: number;
  CoursePrice: number;
}
type propsTypes = {
  isActive?: boolean;
};
const Courses = (props: propsTypes) => {
  const [courseData, setCourseData] = useState<course[]>([]);
  const [isPage, setIsPage] = useState<propsTypes | null>();
  useEffect(() => {
    fetch("./jsonFiles/courses.json")
      .then((res) => res.json())
      .then((data) => {
        props.isActive ? setCourseData(data) : setCourseData(data.slice(0, 3));
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      <section>
        <div className="container">
          {!props.isActive && (
            <h2 style={{ textAlign: "center" }}>Our Most Popular Courses</h2>
          )}

          {/* card wrapper  */}
          <CousesStyles>
            {courseData.map((elm, index) => {
              const {
                id,
                title,
                ratings,
                reviewCount,
                enrolledStudent,
                lectureLength,
                lectureClasses,
                lectureType,
                image,
                name,
                CoursePrice,
              }: course = elm;

              return (
                // card mapping function
                <div className="courses__card" key={index}>
                  <Link to={`/courses/${id}`}>
                    <img
                      src={image}
                      alt=""
                      className="courses__card-CoverImage"
                    />
                    <div className="courses__card-ratingsInfo">
                      <span className="ratings">
                        <span> {ratings}</span>
                        <StarIcon />
                      </span>
                      <span className="reviewCount">{reviewCount}</span>
                      <div className="enrolledStudent">
                        {enrolledStudent} students
                      </div>
                    </div>
                    <div className="courses__card-lectureInfo">
                      <span className="lecture__length">
                        <AccessTimeIcon /> {lectureLength}
                      </span>
                      <span className="lecture__classes">
                        <StickyNote2Icon />
                        {lectureClasses}
                      </span>
                      <span className="lecture__type">
                        <SignalCellularAltIcon />
                        {lectureType}
                      </span>
                    </div>
                    <div className="teacher__info">
                      <img src={image} alt="" className="teacher__image" />
                      <span className="teacher__info-name">{name}</span>
                      <span className="coursePrice">${CoursePrice}.00</span>
                    </div>
                    <Outlet />
                  </Link>
                </div>
              );
            })}
          </CousesStyles>
          {!props.isActive && (
            <Link to={"/courses"}>
              <button className="btn">Explore All</button>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;
