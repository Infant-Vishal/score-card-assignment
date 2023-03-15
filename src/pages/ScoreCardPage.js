import React, { useState } from "react";
import { useSelector } from "react-redux";
import Attendence from "../components/tables/AttendenceTable";
import CoScholasticAreas from "../components/tables/CoScholasticAreasTable";
import GradingScale from "../components/tables/GradingScaleTable";
import ScholasticAreas from "../components/tables/ScholasticAreasTable";
import { DownloadScoreCardPdf } from "../components/utils/DownloadPdf";
import "../assets/css/mainPage.css";

const ScoreCardPage = () => {
  const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
  const jwtToken = localStorage.getItem("jwtToken");

  const studentId = studentDetails.length > 0 ? studentDetails[0].student_id : studentDetails.id;

  const scholasticMarksArr = useSelector(
    (state) => state.scoreReducer.scholasticMarks
  );

  const scoreCardId = "score_card_container";
  const [cumulativeData, setCumulativeData] = useState({
    grandTotal: 0,
    percentage: 0,
    rank: 10,
  });

  return (
    <div className="container-fluid">
      <div className="overall-container" id={scoreCardId}>
        <h1 className="main-heading">First Terminal Examination 2018-19</h1>
        <hr />
        <h3 className="sub-heading">Academic Performance</h3>
        <hr />
        <div className="d-flex flex-row justify-content-center mt-3 mb-3">
          <div class="card w-50">
            <div class="card-header font-weight-bold">Student Details</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Name:{" "}
                {studentDetails.length > 0
                  ? studentDetails[0].student_name
                  : studentDetails.student_name}{" "}
              </li>
              <li class="list-group-item">
                Standard:{" "}
                {studentDetails.length > 0
                  ? studentDetails[0].standard
                  : studentDetails.standard}
              </li>
              <li class="list-group-item">
                Section:{" "}
                {studentDetails.length > 0
                  ? studentDetails[0].section
                  : studentDetails.section}
              </li>
              <li class="list-group-item">
                Roll Number:{" "}
                {studentDetails.length > 0
                  ? studentDetails[0].rollno
                  : studentDetails.rollno}
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7 table-responsive">
            <ScholasticAreas
              scholasticMarksArr={scholasticMarksArr}
              cumulativeData={cumulativeData}
              setCumulativeData={setCumulativeData}
            />
          </div>

          <div className="col-12 col-lg-5 table-responsive">
            <CoScholasticAreas />
          </div>
          <div class="html2pdf__page-break"></div>
          <div className="col-12 table-responsive">
            <Attendence />
          </div>
          <div className="col-12 d-flex flex-row justify-content-between">
            <p className="sub-heading">
              C.G.P : {(cumulativeData.percentage / 10).toFixed(2)}
            </p>
            <p className="sub-heading">Grade : A1</p>
          </div>
          <div className="col-12">
            <p className="normal-text text-left">
              Teacher's Remark - <span className="font-weight-bold">Good</span>
            </p>
          </div>
          <div className="col-12 d-flex flex-row justify-content-between signature">
            <p className="ml-3">Teacher's Signature</p>
            <p>Parents's Signature</p>
            <p>Principal's Signature</p>
          </div>
          <div className="col-12 table-responsive">
            <GradingScale />
          </div>
          <div className="col-12">
            <hr />

            <h5 className="quote-text font-weight-bold">
              Our Parents are seen God on the Earth.
            </h5>
            <div data-html2canvas-ignore="true">
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <button
          type="button"
          class="btn btn-dark mb-3"
          onClick={(e) => {
            DownloadScoreCardPdf(
              e,
              scoreCardId,
              studentId,
              scholasticMarksArr,
              jwtToken
            );
          }}
        >
          Get PDF
        </button>
      </div>
    </div>
  );
};

export default ScoreCardPage;
