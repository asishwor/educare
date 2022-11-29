import { useEffect, useState } from "react";
import { CousesStyles } from "./Courses.styles";

interface course {
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
const Courses = () => {
  const [courseData, setCourseData] = useState<course[]>([]);

  useEffect(() => {
    fetch("./jsonFiles/courses.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data))
      .catch((err) => alert(err));
  }, []);
  console.log(courseData);
  return (
    <>
      <section>
        <div className="container">
          <h2>Our Most Popular Courses</h2>
          <CousesStyles>
            {courseData.map((elm) => {
              const {
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
              {
                console.log(name);
              }
              return (
                <div className="courses__card">
                  <h4 className="title">{title}</h4>
                  <div>
                    <span className="ratings">{ratings}</span>
                    <span className="reviewCount">{reviewCount}</span>
                    <div className="enrolledStudent">{enrolledStudent}</div>
                  </div>
                  <div className="lecture__info">
                    <span className="lecture__length">{lectureLength}</span>
                    <span className="lecture__classes">{lectureClasses}</span>
                    <span className="lecture__type">{lectureType}</span>
                  </div>
                  <div className="teacher__info">
                    <img src={image} alt="" className="teacher__image" />
                    <span className="course__price">{name}</span>
                    <span className="coursePrice">{CoursePrice}</span>
                  </div>
                </div>
              );
            })}
          </CousesStyles>
        </div>
      </section>
    </>
  );
};

export default Courses;
