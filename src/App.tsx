import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import { BannerHeaderContainer } from "./Components/Banner/Banner.style";
import Courses from "./Components/courses/Couses";
import Goals from "./Components/Goals/Goals";
import Header from "./Components/Header/Header";
import CoursesPage from "./pages/Courses/CoursesPage";
import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse/SingleCourse";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/singlepage" element={<SingleCourse />} />
          <Route path="/learn" element={<SingleCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
