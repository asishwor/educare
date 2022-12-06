import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursesPage from "./pages/Courses/CoursesPage";
import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import Parent from "./Parent";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/singlepage" element={<SingleCourse />} />
        <Route path="/learn" element={<SingleCourse />} />
        <Route path={"*"} element="Page not found" />
        {/* nesting route  */}
        <Route path="education" element={<Parent />}>
          <Route index element="Primary Education" />
          <Route path="secondary" element="Secondary Education" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
