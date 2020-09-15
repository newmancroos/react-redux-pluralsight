import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

import { Redirect } from "react-router-dom";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    //if (this.props.courses.length === 0) {
    if (courses.length === 0) {
      //this.props.actions.loadCourses().catch((error) => {
      actions.loadCourses().catch((error) => {
        alert("Loading courses faild" + error);
      });
    }
    //if (this.props.authors.length === 0) {
    if (authors.length === 0) {
      //this.props.actions.loadAuthors().catch((error) => {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors faild" + error);
      });
    }
  }
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>

        <CourseList courses={this.props.courses} />
        {/* {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))} */}
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    //courses: state.courses,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   createCourse: (course) => dispatch(courseActions.createCourse(course)), //Mannually connect action and dispatch
  // };
  return {
    //actions: bindActionCreators(courseActions, dispatch),
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//export default connect(mapStoreToProps, mapDispatchToProps)(CoursesPage);
//mapDispatchToProps - is optional parameter, this lets us declare what actions to pass to our component on props.

//export default CoursesPage;
//Connect return a function, that function then calls our component,
//We can write the above line like
//const connectedStateAndProps = connect(mapStoreToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
