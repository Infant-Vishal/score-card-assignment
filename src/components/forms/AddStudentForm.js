import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { studentValidation } from "../utils/Validation";

const AddStudentForm = ({ headers }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      student_name: "",
      standard: "",
      section: "",
      rollno: "",
    },
    validationSchema: studentValidation,
    onSubmit: (values) => {
      try {
        axios
          .post("https://bright-cyan-rabbit.cyclic.app/student", values, {
            headers,
          })
          .then((response) => {
            console.log("response", response.data.data);
            localStorage.setItem("fromEditResult", false);
            localStorage.setItem("persist:root", null);
            localStorage.setItem(
              "studentDetails",
              JSON.stringify(response.data.data)
            );
            navigate("/score_card");
            window.location.reload();
          })
          .catch((error) => console.log("Error:", error));
      } catch (error) {
        console.log("Error", error);
      }
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div class="form-group text-left mt-3">
        <label for="student_name" className="text-left modal-text">
          Student Name
        </label>
        <input
          type="text"
          id="student_name"
          name="student_name"
          placeholder="Student Name"
          onChange={formik.handleChange}
          value={formik.values.student_name}
          class="form-control"
        />
        {formik.errors.student_name && formik.touched.student_name ? (
          <div className="modal-text text-danger">
            {formik.errors.student_name}
          </div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="standard" className="text-left modal-text">
          Standard
        </label>
        <input
          type="number"
          id="standard"
          name="standard"
          placeholder="Standard"
          onChange={formik.handleChange}
          value={formik.values.standard}
          class="form-control"
        />
        {formik.errors.standard && formik.touched.standard ? (
          <div className="modal-text text-danger">{formik.errors.standard}</div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="section" className="text-left modal-text">
          Section
        </label>
        <input
          type="text"
          id="section"
          name="section"
          maxLength={1}
          placeholder="Section"
          onChange={formik.handleChange}
          value={formik.values.section}
          class="form-control"
        />
        {formik.errors.section && formik.touched.section ? (
          <div className="modal-text text-danger">{formik.errors.section}</div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="rollno" className="text-left modal-text">
          Roll Number
        </label>
        <input
          type="number"
          id="rollno"
          name="rollno"
          placeholder="Roll Number"
          onChange={formik.handleChange}
          value={formik.values.rollno}
          class="form-control"
        />
        {formik.errors.rollno && formik.touched.rollno ? (
          <div className="modal-text text-danger">{formik.errors.rollno}</div>
        ) : null}
      </div>

      <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-success ml-3">
          Add to Table
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;
