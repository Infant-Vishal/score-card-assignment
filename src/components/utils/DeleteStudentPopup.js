import React from "react";
import axios from "axios";

const DeleteStudentPopup = ({ deleteStudent, headers }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    try {
      axios
        .put(
          "https://bright-cyan-rabbit.cyclic.app/deleteStudent",
          deleteStudent,
          {
            headers,
          }
        )
        .then((response) => {
          console.log("Response", response);
          window.location.reload();
        })
        .catch((e) => console.log("Error:", e.message));
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  return (
    <div>
      <div
        class="modal fade"
        id="deleteStudentAlertModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deleteStudentAlertModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteStudentAlertModalTitle">
                Delete Student
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left">
              Are you sure you want to delete this student ?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-link text-secondary mr-1"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-link text-dark"
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudentPopup;
