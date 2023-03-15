import React from "react";
import { useSelector } from "react-redux";
import AttendenceForm from "../forms/AttendenceForm";
import "../../assets/css/table.css";

const Attendence = () => {
  const attendenceArr = useSelector((state) => state.scoreReducer.attendence);
  let numOfDaysPresent = 0;
  if (attendenceArr.length === 0) {
    numOfDaysPresent = 0;
  } else {
    numOfDaysPresent = attendenceArr[0].presentDays;
  }

  return (
    <div>
      <table className="table table-bordered" id="attendence_table">
        <thead>
          <tr>
            <th colSpan={4}>
              <div>
                <h5 className="table-name">Part-3 : Attendence</h5>
                {/*  Button trigger modal  */}
                <div data-html2canvas-ignore="true">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#attendenceModal"
                  >
                    Add
                  </button>
                </div>

                {/* Attendence Modal */}
                <div
                  class="modal fade"
                  id="attendenceModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="attendenceModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Update Attendence</h5>
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
                        <AttendenceForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>No. of Working Days</th>
            <th>No. of Days Present</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TERM - I</td>
            <td>83</td>
            <td>{numOfDaysPresent}</td>
            <td>{((numOfDaysPresent * 100) / 83).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendence;
