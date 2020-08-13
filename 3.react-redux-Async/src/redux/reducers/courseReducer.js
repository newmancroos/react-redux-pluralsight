import * as types from "../actions/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //state.push(action.course); // Don't do this, it is making mutate state
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

/*
    in our example we use 
    const courses = [
        {id:1, title:"Course 1"},
        {id:2, title:"Course 2"}
    ];

    courses.find(x =>x.id == 2);

    but we can use list of object
    const courses = {
        {id:1, title:"Course 1"},
        {id:2, title:"Course 2"}
    };
    courses[1];
*/
