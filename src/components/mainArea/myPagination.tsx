import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import './mainArea.css';

function MyPagination() {
  return (
    <Pagination count={10} size="large" showFirstButton showLastButton boundaryCount={0}
    className={"PaginationStyle"}/>
  );
}

export default MyPagination;