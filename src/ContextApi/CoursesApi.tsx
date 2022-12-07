import { createContext } from "react";
import coursesData from "../jsonFiles/coursesData.json";

export const CourseContext = createContext(coursesData);

type PropsTypes = {
  children: JSX.Element;
};

const CoursesApi = ({ children }: PropsTypes) => {
  return (
    <>
      <CourseContext.Provider value={coursesData}>
        {children}
      </CourseContext.Provider>
    </>
  );
};

export default CoursesApi;
