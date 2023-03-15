import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addAttendence } from "../../redux/actions";
import { attendenceFormValidation } from "../utils/Validation";

const AttendenceForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      presentDays: 0,
    },
    validationSchema: attendenceFormValidation,
    onSubmit: (values) => {
      dispatch(addAttendence(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group text-left mt-3">
          <label for="" className="text-left modal-text">
            No.of Days Present
          </label>
          <input
            type="number"
            id="present_days"
            name="presentDays"
            placeholder="Present Days"
            onChange={formik.handleChange}
            value={formik.values.presentDays}
            class="form-control"
          />
          {formik.errors.presentDays ? (
            <div className="modal-text text-danger">
              {formik.errors.presentDays}
            </div>
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

export default AttendenceForm;
