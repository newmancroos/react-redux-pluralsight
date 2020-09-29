import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

function renderCourseForm(args) {
  //Factory functionreturn default props
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("render form and header", () => {
  const wrapper = renderCourseForm();
  //console.log(wrapper.debug());  //will log the html portion.
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it('label save button as "Save" when not saving', () =>{
    const wrapper = renderCourseForm();
    expect(wrapper.find("button").text()).toBe("Save");
});

it('label save button as "Save..." when saving', () =>{
    const wrapper = renderCourseForm({saving:true});
    expect(wrapper.find("button").text()).toBe("Saving...");
});
