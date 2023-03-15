import React from "react";
import StudentsListTable from "../components/tables/StudentsListTable";

const StudentsListPage = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-primary fixed-top">
        <a class="navbar-brand font-weight-bold" href="#">
          <img
            src={require("../assets/images/admin_image.png")}
            width="30"
            height="30"
            class="d-inline-block align-top mr-3"
            alt=""
          />
          Student Admin Dashboard
        </a>
      </nav>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 mt-5">
            <StudentsListTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsListPage;
