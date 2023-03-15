import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { editCoScholasticGrade } from "../../../redux/actions";
import { coScholasticAreasValidation } from "../../utils/Validation";

const EditCoScholasticAreasForm = ({ coScholasticGradeArr, editIndex }) => {
  const dispatch = useDispatch();
  const editItem = coScholasticGradeArr[editIndex];
  const skill = editItem?.coScholasticSkills;

  const formik = useFormik({
    initialValues: editItem,
    enableReinitialize: true,
    validationSchema: coScholasticAreasValidation,
    onSubmit: (values) => {
      values.coScholasticSkills = skill;
      dispatch(editCoScholasticGrade(values));
      toast.success("Updated successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  return (
    <>
      <ToastContainer />
      <div
        class="modal"
        id="editCoScholasticAreasModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editCoScholasticAreasModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit {skill} Grade</h5>
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
                    <div className="modal-text text-danger">
                      {formik.errors.grade}
                    </div>
                  ) : null}
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-warning">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCoScholasticAreasForm;
