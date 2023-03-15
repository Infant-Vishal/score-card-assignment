const initialState = {
  scholasticMarks: [],
  coScholasticGrade: [],
  attendence: [],
};
const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEARPERSISTEDDATA":
      return initialState;
    case "ADDSCHOLASTICMARKS":
      return {
        ...state,
        scholasticMarks: [...state.scholasticMarks, action.payload],
      };
    case "EDITSCHOLASTICMARKS":
      return {
        ...state,
        scholasticMarks: state.scholasticMarks.map((item) =>
          item.subject === action.payload.subject ? action.payload : item
        ),
      };
    case "DELETESCHOLASTICMARKS":
      return {
        ...state,
        scholasticMarks: [
          ...state.scholasticMarks.slice(0, action.payload),
          ...state.scholasticMarks.slice(action.payload + 1),
        ],
      };

    case "ADDCOSCHOLASTICGRADE":
      return {
        ...state,
        coScholasticGrade: [...state.coScholasticGrade, action.payload],
      };
    case "EDITCOSCHOLASTICGRADE":
      return {
        ...state,
        coScholasticGrade: state.coScholasticGrade.map((item) =>
          item.coScholasticSkills === action.payload.coScholasticSkills
            ? action.payload
            : item
        ),
      };
    case "DELETECOSCHOLASTICGRADE":
      return {
        ...state,
        coScholasticGrade: [
          ...state.coScholasticGrade.slice(0, action.payload),
          ...state.coScholasticGrade.slice(action.payload + 1),
        ],
      };
    case "ATTENDENCE":
      return {
        ...state,
        attendence: [action.payload],
      };
    default:
      return state;
  }
};

export default ScoreReducer;
