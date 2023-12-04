import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  length,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  length: number;
}) => {
  const MAX_PAGES_DISPLAYED = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil((length || 0) / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil((length || 0) / itemsPerPage);

    if (totalPages <= MAX_PAGES_DISPLAYED) {
      return Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        )
      );
    }

    const leftEllipsis = currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2) > 1;
    const rightEllipsis =
      currentPage + Math.floor(MAX_PAGES_DISPLAYED / 2) < totalPages;

    const pagesToDisplay = [];
    if (leftEllipsis) {
      pagesToDisplay.push(1);
      pagesToDisplay.push(null);
    }

    for (
      let page = Math.max(1, currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2));
      page <=
      Math.min(totalPages, currentPage + Math.floor(MAX_PAGES_DISPLAYED / 2));
      page++
    ) {
      pagesToDisplay.push(page);
    }

    if (rightEllipsis) {
      pagesToDisplay.push(null);
      pagesToDisplay.push(totalPages);
    }

    return pagesToDisplay.map((page, index) => (
      <button
        key={index}
        onClick={() => page !== null && handlePageChange(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page !== null ? page : "..."}
      </button>
    ));
  };

  return (
    <div className="flex justify-end mt-4">
      <div className="px-3 py-2 border-2 border-gray-400 rounded-full">
        <button
          onClick={handlePreviousPage}
          className="mr-2 px-2 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200"
        >
          <IoArrowBack />
        </button>
        {renderPaginationButtons()}
        <button
          onClick={handleNextPage}
          className="ml-2 px-2 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200"
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
