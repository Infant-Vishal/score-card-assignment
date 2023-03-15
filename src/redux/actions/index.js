export const clearPersistedData = () => {
  return {
    type: "CLEARPERSISTEDDATA",
  };
};

export const addScholasticMarks = (values) => {
  return {
    type: "ADDSCHOLASTICMARKS",
    payload: values,
  };
};

export const editScholasticMarks = (values) => {
  return {
    type: "EDITSCHOLASTICMARKS",
    payload: values,
  };
};

export const deleteScholasticMarks = (index) => {
  return {
    type: "DELETESCHOLASTICMARKS",
    payload: index,
  };
};

export const addCoScholasticGrade = (values) => {
  return {
    type: "ADDCOSCHOLASTICGRADE",
    payload: values,
  };
};

export const editCoScholasticGrade = (values) => {
  return {
    type: "EDITCOSCHOLASTICGRADE",
    payload: values,
  };
};

export const deleteCoScholasticGrade = (index) => {
  return {
    type: "DELETECOSCHOLASTICGRADE",
    payload: index,
  };
};

export const addAttendence = (values) => {
  return {
    type: "ATTENDENCE",
    payload: values,
  };
};
