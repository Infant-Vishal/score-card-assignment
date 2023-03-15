import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteScholasticMarks } from "../../redux/actions";
import ScholasticAreasForm from "../forms/ScholasticAreasForm";
import EditScholasticAreasForm from "../forms/edit_forms/EditScholasticAreasForm";
import "../../assets/css/table.css";

const ScholasticAreas = ({
  cumulativeData,
  scholasticMarksArr,
  setCumulativeData,
}) => {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [showEditMarkModal, setShowEditMarkModal] = useState(false);

  let overallMarkArr = [];

  useEffect(() => {
    setCumulativeData((previousState) => {
      return {
        ...previousState,
        grandTotal: overallMarkArr.reduce((partialSum, a) => partialSum + a, 0),
        percentage:
          (overallMarkArr.reduce((partialSum, a) => partialSum + a, 0) * 100) /
          1000,
      };
    });
  }, [scholasticMarksArr]);

  const handleEditMarks = (e, index) => {
    e.preventDefault();
    setShowEditMarkModal(true);
    setEditIndex(index);
  };

  return (
    <div>
      <table className="table table-bordered" id="scholastic_areas_table">
        <thead>
          <tr>
            <th colSpan={9}>
              <div>
                <h5 className="table-name">Part-1: Scholastic Areas</h5>
                {/*  Button trigger modal  */}
                <div data-html2canvas-ignore="true">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#scholasticAreasModal"
                  >
                    Add
                  </button>
                </div>

                {/* Scholastic Areas Modal */}
                <div
                  class="modal fade"
                  id="scholasticAreasModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="scholasticAreasModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add Marks</h5>
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
                        <ScholasticAreasForm
                          scholasticMarksArr={scholasticMarksArr}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2} className="text-center">
              SI.No
            </th>
            <th rowSpan={2} className="text-center">
              SUBJECTS
            </th>
            <th className="text-center">FA</th>
            <th className="text-center">Oral</th>
            <th className="text-center">SA</th>
            <th className="text-center">Oral</th>
            <th className="text-center">Overall Marks</th>
            <th
              className="text-center"
              colspan={2}
              data-html2canvas-ignore="true"
            >
              Action
            </th>
          </tr>

          <tr>
            <th className="text-center">40</th>
            <th className="text-center">10</th>
            <th className="text-center">40</th>
            <th className="text-center">10</th>
            <th className="text-center">100</th>

            <th className="text-center" data-html2canvas-ignore="true">
              Edit
            </th>
            <th className="text-center" data-html2canvas-ignore="true">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {scholasticMarksArr?.map((scholasticMarks, index) => {
            overallMarkArr.push(scholasticMarks.overallMark);

            return (
              <tr>
                <td>{index + 1}</td>
                <td>{scholasticMarks.subject}</td>
                <td>{scholasticMarks.faMark}</td>
                <td>{scholasticMarks.faOralMark}</td>
                <td>{scholasticMarks.saMark}</td>
                <td>{scholasticMarks.saOralMark}</td>
                <td>{scholasticMarks.overallMark}</td>

                <td data-html2canvas-ignore="true">
                  <FiEdit
                    className="edit-icon"
                    onClick={(e) => handleEditMarks(e, index)}
                    data-toggle="modal"
                    data-target="#editScholasticAreasModal"
                  />
                  {/* Edit Scholastic Areas Modal */}
                  {showEditMarkModal ? (
                    <EditScholasticAreasForm
                      scholasticMarksArr={scholasticMarksArr}
                      editIndex={editIndex}
                    />
                  ) : null}
                </td>

                <td data-html2canvas-ignore="true">
                  <AiOutlineDelete
                    className="delete-icon"
                    onClick={() => dispatch(deleteScholasticMarks(index))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="text-right">
          <tr>
            <th colSpan={2}>GRAND TOTAL</th>
            <td colspan={7}>{cumulativeData.grandTotal}</td>
          </tr>
          <tr>
            <th colSpan={2}>PERCENTAGE</th>
            <td colspan={7}>{cumulativeData.percentage}%</td>
          </tr>
          <tr>
            <th colSpan={2}>RANK</th>
            <td colspan={7}>{cumulativeData.rank}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ScholasticAreas;
