import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addCoScholasticGrade } from "../../redux/actions";
import { coScholasticAreasValidation } from "../utils/Validation";

const CoScholasticAreasForm = ({ coScholasticGradeArr }) => {
  const dispatch = useDispatch();

  const skillsArr = [
    "Development & Maturity",
    "Responsiblity",
    "Self Confidence",
    "Participation in Group Work",
    "Neatness",
    "Music",
    "Discipline",
    "Hand Work",
    "Attitude towards Home work",
    "Craft",
    "Regularity & Punctuality",
  ];

  const selectedSkill = coScholasticGradeArr.map((e) => e.coScholasticSkills);

  const formik = useFormik({
    initialValues: {
      coScholasticSkills: "",
      grade: "",
    },
    validationSchema: coScholasticAreasValidation,
    onSubmit: (values) => {
      dispatch(addCoScholasticGrade(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group text-left mt-3">
          <label for="co_scholastic_skills" className="text-left modal-text">
            Subject
          </label>
          <select
            id="coScholasticSkills"
            name="coScholasticSkills"
            onChange={formik.handleChange}
            value={formik.values.coScholasticSkills}
            class="form-control"
          >
            <option value="" disabled selected>
              Select the co-scholastic skills
            </option>
            <>
              {skillsArr.map((coScholasticSkill, index) => {
                return (
                  !selectedSkill.includes(coScholasticSkill) && (
                    <option key={index} value={coScholasticSkill}>
                      {coScholasticSkill}
                    </option>
                  )
                );
              })}
            </>
          </select>
          {formik.errors.coScholasticSkills &&
          formik.touched.coScholasticSkills ? (
            <div className="modal-text text-danger">
              {formik.errors.coScholasticSkills}
            </div>
          ) : null}
        </div>

        <div class="form-group text-left mt-3">
          <label for="grade" className="text-left modal-text">
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            onChange={formik.handleChange}
            value={formik.values.grade}
            class="form-control"
          >
            <option value="" disabled selected>
              Select the Grade
            </option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
          {formik.errors.grade && formik.touched.grade ? (
            <div className="modal-text text-danger">{formik.errors.grade}</div>
          ) : null}
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-success">
            Add to Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoScholasticAreasForm;
