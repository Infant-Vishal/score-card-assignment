import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addScholasticMarks, clearPersistedData } from "../../../redux/actions";
import { studentValidation } from "../../utils/Validation";

const EditStudentForm = ({ editStudent, headers }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentId = editStudent.id;

  const handleEditResult = (e) => {
    e.preventDefault();
    try {
      axios
        .get(`https://bright-cyan-rabbit.cyclic.app/result/${studentId}`, {
          headers,
        })
        .then((response) => {
          localStorage.setItem(
            "studentDetails",
            JSON.stringify(response.data.data)
          );

          localStorage.setItem("fromEditResult", true);

          dispatch(clearPersistedData());

          response.data.data.forEach((element) => {
            dispatch(addScholasticMarks(element));
          });

          navigate("/score_card");
          window.location.reload();
        })
        .catch((error) => console.error("Error", error));
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const formik = useFormik({
    initialValues: editStudent,
    enableReinitialize: true,
    validationSchema: studentValidation,
    onSubmit: (values) => {
      try {
        axios
          .put("https://bright-cyan-rabbit.cyclic.app/updateStudent", values, {
            headers,
          })
          .then((response) => {
            console.log("Response", response);
            window.location.reload();
          })
          .catch((e) => console.log("Error:", e.message));
      } catch (err) {
        console.error("Edit Student Error:", err);
      }
    },
  });
  return (
    <div>
      {/* Edit Student Modal */}
      <div
        class="modal"
        id="editStudentModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editStudentModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Student</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
                    <div className="modal-text text-danger">
                      {formik.errors.standard}
                    </div>
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
                    <div className="modal-text text-danger">
                      {formik.errors.section}
                    </div>
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
                    <div className="modal-text text-danger">
                      {formik.errors.rollno}
                    </div>
                  ) : null}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    class="btn btn-warning ml-3"
                    onClick={handleEditResult}
                  >
                    Edit Result
                  </button>
                  <button type="submit" class="btn btn-success ml-3">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentForm;
