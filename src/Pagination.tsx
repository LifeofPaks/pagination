import React from "react";
import "./Pagination.scss";

type Props = {
  totalPost: number;
  postPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Pagination = ({
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}: Props) => {

  const pages: number[] = [];
  const totalpages: number = Math.ceil(totalPost / postPerPage);
  
  
  for (let i: number = 1; i <= totalpages; i++) {
    pages.push(i);
  }
  const lastPageNumber: number = pages.length
  console.log(lastPageNumber)


  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage -  1);
    } else {
      setCurrentPage(1)
    }
  };

  const firstPage = () =>{
    setCurrentPage(1)
  }

  const nextPage = () => {
    if (currentPage !==  lastPageNumber) {
      setCurrentPage(currentPage +  1);
    } else {
      setCurrentPage(lastPageNumber)
    }
  };

  const lastPage = () =>{
    setCurrentPage(lastPageNumber)
  }

  return (
    <div className="pg">
      <div className="pagWraps">
        <div onClick={firstPage} className="first num">
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/sf-black-filled/64/double-left.png"
            alt="double-left"
          />
        </div>
        <div onClick={prevPage}className="prev num">
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/material/24/chevron-left--v1.png"
            alt="chevron-left--v1"
          />
        </div>
        {pages.map((page: number, i) => (
          <div
            className={`num ${currentPage === i + 1 ? "active" : ""}`}
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
        <div className="next num" onClick={nextPage}>
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/material-rounded/24/chevron-right.png"
            alt="chevron-right"
          />
        </div>
        <div className="last num" onClick={lastPage}>
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/sf-black-filled/64/double-right.png"
            alt="double-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
