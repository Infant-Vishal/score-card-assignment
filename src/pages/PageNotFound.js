import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <img
        src={require("../assets/images/page_not_found.jpg")}
        alt="page_not_found"
        className="w-100"
      />
    </div>
  );
};

export default PageNotFound;
