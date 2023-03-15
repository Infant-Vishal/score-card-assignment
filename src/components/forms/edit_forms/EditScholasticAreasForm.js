import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { editScholasticMarks } from "../../../redux/actions";
import { scholasticAreasValidation } from "../../utils/Validation";

const EditScholasticAreasForm = ({ scholasticMarksArr, editIndex }) => {
  const dispatch = useDispatch();
  const editItem = scholasticMarksArr[editIndex];

  const formik = useFormik({
    initialValues: editItem,
    enableReinitialize: true,
    validationSchema: scholasticAreasValidation,
    onSubmit: (values) => {
      values.subject = editItem?.subject;
      values.overallMark =
        values.faMark + values.faOralMark + values.saMark + values.saOralMark;
      dispatch(editScholasticMarks(values));
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
      {/* Edit Scholastic Areas Modal */}
      <div
        class="modal"
        id="editScholasticAreasModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editScholasticAreasModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit {editItem.subject} Marks</h5>
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
                  <label for="faMark" className="text-left modal-text">
                    FA marks
                  </label>
                  <input
                    type="number"
                    id="faMark"
                    name="faMark"
                    placeholder="FA Mark"
                    onChange={formik.handleChange}
                    value={formik.values.faMark}
                    class="form-control"
                  />
                  {formik.errors.faMark && formik.touched.faMark ? (
                    <div className="modal-text text-danger">
                      {formik.errors.faMark}
                    </div>
                  ) : null}
                </div>

                <div class="form-group text-left mt-3">
                  <label for="faOralMark" className="text-left modal-text">
                    FA Oral
                  </label>
                  <input
                    type="number"
                    id="faOralMark"
                    name="faOralMark"
                    placeholder="FA Oral Mark"
                    onChange={formik.handleChange}
                    value={formik.values.faOralMark}
                    class="form-control"
                  />
                  {formik.errors.faOralMark && formik.touched.faOralMark ? (
                    <div className="modal-text text-danger">
                      {formik.errors.faOralMark}
                    </div>
                  ) : null}
                </div>

                <div class="form-group text-left mt-3">
                  <label for="saMark" className="text-left modal-text">
                    SA marks
                  </label>
                  <input
                    type="number"
                    id="saMark"
                    name="saMark"
                    placeholder="SA Mark"
                    onChange={formik.handleChange}
                    value={formik.values.saMark}
                    class="form-control"
                  />
                  {formik.errors.saMark && formik.touched.saMark ? (
                    <div className="modal-text text-danger">
                      {formik.errors.saMark}
                    </div>
                  ) : null}
                </div>

                <div class="form-group text-left mt-3">
                  <label for="saOralMark" className="text-left modal-text">
                    SA Oral
                  </label>
                  <input
                    type="number"
                    id="saOralMark"
                    name="saOralMark"
                    placeholder="SA Oral Mark"
                    onChange={formik.handleChange}
                    value={formik.values.saOralMark}
                    class="form-control"
                  />
                  {formik.errors.saOralMark && formik.touched.saMark ? (
                    <div className="modal-text text-danger">
                      {formik.errors.saOralMark}
                    </div>
                  ) : null}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-warning ml-3">
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

export default EditScholasticAreasForm;
