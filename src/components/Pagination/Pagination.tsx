import React from "react";

type PagintaionPropsTypes = {
  currentPage: number;
  totalCount: number;
  perPage: number;
  setCurrentPage: (page: number) => void 
};

const Pagination: React.FC<PagintaionPropsTypes> = ({
  currentPage,
  totalCount,
  perPage,
  setCurrentPage
}) => {
  const pagesCount = [];
  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    pagesCount.push(i);
  }
  const onSetCurrentPageHandler = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <nav>
      <ul>
        {pagesCount.map((page) => (
          <li key={page} style={{ listStyle: "none", display: "inline-block" }}>
            <a
              href="!#"
              className={`${page === currentPage && "active"}`}
              style={{
                textDecoration: "none",
                padding: 10,
                border: "1px solid #ddd",
              }}
              onClick={() => onSetCurrentPageHandler(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
