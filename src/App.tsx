import { Routes, Route } from "react-router-dom";
import { CourseContext } from "./ContextApi/CoursesApi";
import CoursesPage from "./pages/Courses/CoursesPage";
import Home from "./pages/Home";
import { useContext } from "react";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import MentorsPage from "./pages/mentor/MentorsPage";
import TestimnonialsPage from "./pages/testimonials/TestimnonialsPage";
import Header from "./Components/Header/Header";
import FooterComponent from "./Components/footer/Footer";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route path="/courses">
          <Route index element={<CoursesPage />} />
          <Route path=":id" element={<SingleCourse />} />
        </Route>
        <Route path="testimonials" element={<TestimnonialsPage />} />
        <Route path="mentor" element={<MentorsPage />} />
        <Route path={"*"} element="Page not found" />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
