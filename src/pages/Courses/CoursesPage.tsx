import Courses from "../../Components/courses/Couses";
import FooterComponent from "../../Components/footer/Footer";
import Header from "../../Components/Header/Header";
import { CoursesPageContent } from "../Courses/CoursePage.style";

const CoursesPage = () => {
  return (
    <>
      <Header />
      <CoursesPageContent>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Our Most Popular Courses</h2>
          <div className="overlay"></div>
          <p>
            Learn programming with free online courses from real college courses
            from Harvard, MIT, and more of the world's leading universities.
            Pick up essential coding skills needed for frontend and/or backend
            web development, machine learning, IOS, Android, and much more.
          </p>
        </div>
      </CoursesPageContent>
      <Courses isActive />
    </>
  );
};

export default CoursesPage;
