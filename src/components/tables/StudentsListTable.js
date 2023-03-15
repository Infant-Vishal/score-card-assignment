import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddStudentForm from "../forms/AddStudentForm";
import EditStudentForm from "../forms/edit_forms/EditStudentForm";
import DeleteStudentPopup from "../utils/DeleteStudentPopup";
import Pagination from "../utils/Pagination";
import "../../assets/css/table.css";

const StudentsListTable = () => {
  const [showEditStudentModal, setShowEditStudentModal] = useState(false);
  const [editStudent, setEditStudent] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [deleteStudent, setDeleteStudent] = useState();
  const [studentsListArr, setStudentsListArr] = useState([
    {
      id: "c0b73102-97bb-4e6b-b32a-6cd9f1d19bee",
      student_name: "Vishal",
      standard: 3,
      section: "C",
      rollno: 10,
      status: "1",
    },
  ]);

  //Get current students

  const indexOfLastPost = currentPage * studentsPerPage;
  const indexOfFirstPost = indexOfLastPost - studentsPerPage;
  const currenStudentsList = studentsListArr.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const jwtToken = localStorage.getItem("jwtToken");
  const headers = {
    Authorization: jwtToken,
  };
  useEffect(() => {
    console.log("num of times get response is called");
    axios
      .get("https://bright-cyan-rabbit.cyclic.app/students", { headers })
      .then((response) => {
        console.log("num of times get response is success");
        setStudentsListArr(response.data.data);
      })
      .catch((error) => console.error("Error:", error.message));
  }, []);

  const handleEditStudent = (e, student) => {
    e.preventDefault();
    setEditStudent(student);
    setShowEditStudentModal(true);
  };

  const handleDelete = (e, student) => {
    e.preventDefault();
    setDeleteStudent(student);
  };

  return (
    <div>
      <table className="table table-bordered" id="student_list_table">
        <thead>
          <tr>
            <th colSpan={7}>
              <div>
                <h5 className="table-name">Students List</h5>
                {/* modal popup */}
                {/*  Button trigger modal  */}

                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#addStudentModal"
                >
                  Add
                </button>

                {/* Attendence Modal */}
                <div
                  class="modal fade"
                  id="addStudentModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="addStudentModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add Student</h5>
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
                        <AddStudentForm headers={headers} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2}>SI.No</th>
            <th rowSpan={2}>Student Name</th>
            <th rowSpan={2}>Standard</th>
            <th rowSpan={2}>Section</th>
            <th rowSpan={2}>Roll Number</th>
            <th colSpan={2}>Action</th>
          </tr>
          <tr>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currenStudentsList?.map((student, index) => {
            return (
              <tr>
                <td>{studentsListArr.indexOf(student) + 1}</td>
                <td>{student.student_name}</td>
                <td>{student.standard}</td>
                <td>{student.section}</td>
                <td>{student.rollno}</td>
                <td>
                  <FiEdit
                    className="edit-icon"
                    onClick={(e) => handleEditStudent(e, student)}
                    data-toggle="modal"
                    data-target="#editStudentModal"
                  />
                  {/* Edit Scholastic Areas Modal */}
                  {showEditStudentModal ? (
                    <EditStudentForm
                      editStudent={editStudent}
                      headers={headers}
                    />
                  ) : null}
                </td>
                <td>
                  <AiOutlineDelete
                    className="delete-icon"
                    onClick={(e) => handleDelete(e, student)}
                    data-toggle="modal"
                    data-target="#deleteStudentAlertModal"
                  />
                  {/*Delete Student Popup */}
                  {deleteStudent ? (
                    <DeleteStudentPopup
                      deleteStudent={deleteStudent}
                      headers={headers}
                    />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <td colSpan={7}>
            <Pagination
              studentsPerPage={studentsPerPage}
              totalPosts={studentsListArr.length}
              paginate={paginate}
            />
          </td>
        </tfoot>
      </table>
    </div>
  );
};

export default StudentsListTable;
