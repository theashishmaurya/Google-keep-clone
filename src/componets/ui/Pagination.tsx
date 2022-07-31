import usePagination, { DOTS } from "../customHook/usePagination";

export interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  totalCount: number;
  className?: string;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, onPageChange, pageSize, totalCount } = props;

  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      pageSize,
      siblingCount: 2,
    }) ?? [];

  if (currentPage === 0 || paginationRange.length < 2) {
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  // ${currentPage === 1 ? "disabled:opactity-75" : ""}
  return (
    <div className=''>
      <div className='btn-group'>
        <button
          onClick={onPrevious}
          disabled={currentPage === 1 ? true : false}
          className={`btn `}
        >
          {"<<"}
        </button>
        {paginationRange.map((page, index) => {
          if (page === DOTS) {
            return (
              <button className='btn btn-disabled' key={index}>
                ...
              </button>
            );
          }

          return (
            <button
              key={index}
              className={`btn ${page === currentPage ? "btn-active" : " "}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={onNext}
          className='btn'
          disabled={currentPage === lastPage}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
