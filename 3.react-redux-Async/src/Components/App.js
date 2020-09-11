import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFount";
import CoursesPage from "./Courses/CoursesPage";
import CourseDetail from "./Courses/CourseDetail";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course/:bookname" component={CourseDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
