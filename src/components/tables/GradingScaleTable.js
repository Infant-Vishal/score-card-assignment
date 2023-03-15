import React from "react";
import "../../assets/css/table.css";

const GradingScale = () => {
  return (
    <div className="d-flex flex-row justify-content-center mt-4">
      <table className="table table-bordered w-75" id="scholastic_areas_table">
        <thead>
          <tr>
            <th colSpan={3}>
              <div>
                <h5 className="table-name">GRADING SCALE</h5>
              </div>
            </th>
          </tr>
          <tr>
            <th>MARKS RANGE</th>
            <th>GRADES</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>91 - 100</td>
            <td>A1</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>81 - 90</td>
            <td>A2</td>
            <td>Very Good</td>
          </tr>
          <tr>
            <td>71 - 80</td>
            <td>B1</td>
            <td>Good</td>
          </tr>
          <tr>
            <td>61 - 70</td>
            <td>B2</td>
            <td>Satisfactory</td>
          </tr>
          <tr>
            <td>51 - 60</td>
            <td>C1</td>
            <td>Satisfactory</td>
          </tr>
          <tr>
            <td>40 - 50</td>
            <td>C2</td>
            <td>Unsatisfactory</td>
          </tr>
          <tr>
            <td>Below 40</td>
            <td>D</td>
            <td>Fail / Poor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradingScale;
