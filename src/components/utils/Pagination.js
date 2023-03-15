import React from "react";

const Pagination = ({ studentsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex flex-row justify-content-center">
      <nav className="mt-3">
        <ul className="pagination pagination-lg">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
