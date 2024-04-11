import { useState } from 'react';

interface Props {
  initialPage: number;
  totalPages: number;
}

function usePagination({ initialPage, totalPages }: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 >= 0 ? prevPage - 1 : totalPages - 1,
    );
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 < totalPages ? prevPage + 1 : 0,
    );
  };

  return {
    currentPage,
    goToPrevPage,
    goToNextPage,
  };
}

export default usePagination;
