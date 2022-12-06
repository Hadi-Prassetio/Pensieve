import * as React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  totalPost,
  postsPerPage,
  currentPage,
  setCurrentPage,
  firstPostIndex,
  lastPostIndex,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  const back = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const next = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {firstPostIndex + 1} - {lastPostIndex} of {totalPost}
      <IoIosArrowBack onClick={back} />
      <IoIosArrowForward onClick={next} />
    </div>
  );
};

export default Pagination;
