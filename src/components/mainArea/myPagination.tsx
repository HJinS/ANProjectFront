import React from 'react';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './mainArea.css';
import PaginationType from '../types/paginationType';

function MyPagination(props: PaginationType) {
  return (
    <div className='PaginationStyle'>
      <IconButton onClick={props.previousPage} disabled={!props.isPreviousUrl}>
        <NavigateBeforeIcon/>
      </IconButton>
      <IconButton onClick={props.nextPage} disabled={!props.isNextUrl}>
        <NavigateNextIcon/>
      </IconButton>
    </div>
    
  );
}

export default MyPagination;