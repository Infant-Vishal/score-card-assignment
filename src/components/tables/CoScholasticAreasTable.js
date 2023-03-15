import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import CoScholasticAreasForm from "../forms/CoScholasticAreasForm";
import { deleteCoScholasticGrade } from "../../redux/actions";
import EditCoScholasticAreasForm from "../forms/edit_forms/EditCoScholasticAreasForm";
import "../../assets/css/table.css";

const CoScholasticAreas = () => {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [showEditGradeModal, setShowEditGradeModal] = useState(false);
  const coScholasticGradeArr = useSelector(
    (state) => state.scoreReducer.coScholasticGrade
  );

  const handleEditGrade = (e, index) => {
    e.preventDefault();
    setShowEditGradeModal(true);
    setEditIndex(index);
  };

  return (
    <div>
      <table className="table table-bordered" id="co_scholastic_areas_table">
        <thead>
          <tr>
            <th colSpan={4}>
              <div>
                <h5 className="table-name">Part-2 : Co-Scholastic Areas</h5>
                {/*  Button trigger modal  */}
                <div data-html2canvas-ignore="true">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#coScholasticAreasModal"
                  >
                    Add
                  </button>
                </div>

                {/* Co Scholastic Areas Modal */}
                <div
                  class="modal fade"
                  id="coScholasticAreasModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="coScholasticAreasModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add Co-Scholastic Grades</h5>
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
                        <CoScholasticAreasForm
                          coScholasticGradeArr={coScholasticGradeArr}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2}>Skills</th>
            <th rowSpan={2}>Grade</th>
            <th colSpan={2} data-html2canvas-ignore="true">
              Actions
            </th>
          </tr>

          <tr data-html2canvas-ignore="true">
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {coScholasticGradeArr?.map((coScholasticGrade, index) => {
            return (
              <tr>
                <td>{coScholasticGrade.coScholasticSkills}</td>
                <td>{coScholasticGrade.grade}</td>

                <td data-html2canvas-ignore="true">
                  <FiEdit
                    className="edit-icon"
                    onClick={(e) => handleEditGrade(e, index)}
                    data-toggle="modal"
                    data-target="#editCoScholasticAreasModal"
                  />
                  {/* Edit Scholastic Areas Modal */}
                  {showEditGradeModal ? (
                    <EditCoScholasticAreasForm
                      coScholasticGradeArr={coScholasticGradeArr}
                      editIndex={editIndex}
                    />
                  ) : null}
                </td>
                <td data-html2canvas-ignore="true">
                  <AiOutlineDelete
                    className="delete-icon"
                    onClick={() => dispatch(deleteCoScholasticGrade(index))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoScholasticAreas;
