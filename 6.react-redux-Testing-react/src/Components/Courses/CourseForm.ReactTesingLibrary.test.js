import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup); //run after every test to clean up

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () =>{
    const {getByText} = renderCourseForm();
    getByText("Add Course"); // note that we don't use any expect assert clacuse.
});

it('sould leable save button as "Save" when not saving', () =>{
    const {getByText} = renderCourseForm();
    getByText("Save");
})

it('sould leable save button as "Saving" when saving', () =>{
    const {getByText, debug} = renderCourseForm({saving:true}); //debug gives as color coded html
    debug();
    getByText("Saving...");
})