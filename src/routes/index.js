import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ScoreCardPage from "../pages/ScoreCardPage";
import PageNotFound from "../pages/PageNotFound";
import StudentsListPage from "../pages/StudentsListPage";

const MainRouter = () => {
  const location = useLocation();
  const loginStatus = JSON.parse(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem("userLoggedIn", false);
    }
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/students_list"
          element={
            loginStatus === true ? (
              <StudentsListPage />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/score_card"
          element={
            loginStatus === true ? (
              <ScoreCardPage />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
