/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, PageButton, NavButton } from './styles';

interface IPaginationProps {
  currentPage: number;
  onPageChange(page: number): void;
  totalPages: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const prev = () => onPageChange(Math.max(currentPage - 1, 1));
  const next = () => onPageChange(Math.min(currentPage + 1, totalPages));
  const jump = (page: number) =>
    onPageChange(Math.min(Math.max(page, 1), totalPages));

  const pagesArray = useMemo(() => {
    if (totalPages <= 1) return undefined;

    const array: (string | number)[] = new Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);

    if (totalPages <= 10) {
      return array;
    }

    const difToEnd = totalPages - currentPage;
    const difToStart = currentPage - 1;
    const index = array.findIndex(page => page === currentPage);
    if (difToStart > 5 && difToEnd > 5) {
      const middleArray = array.slice(index - 3, index + 3);
      middleArray.unshift(1, '...');
      middleArray.push('...', totalPages);
      return middleArray;
    }

    if (difToStart <= 5) {
      const startingArray = array.slice(0, 8);
      startingArray.push('...', totalPages);
      return startingArray;
    }

    if (difToEnd <= 5) {
      const endingArray = array.slice(array.length - 8);
      endingArray.unshift(1, '...');
      return endingArray;
    }

    return array;
  }, [currentPage, totalPages]);

  return (
    <Container>
      {pagesArray && (
        <>
          <NavButton
            prevOrNext="prev"
            disabled={currentPage === 1}
            onClick={() => prev()}
          >
            <FaChevronLeft size={10} />
            Anterior
          </NavButton>
          {pagesArray.map((page, index) => {
            return (
              <PageButton
                key={index}
                selected={page === currentPage}
                disabled={page === '...'}
                onClick={() => jump(Number(page))}
              >
                {page}
              </PageButton>
            );
          })}
          <NavButton
            prevOrNext="next"
            disabled={currentPage === totalPages}
            onClick={() => next()}
          >
            Próxima
            <FaChevronRight size={10} />
          </NavButton>
        </>
      )}
    </Container>
  );
};

export default Pagination;
