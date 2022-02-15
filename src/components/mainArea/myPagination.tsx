import * as React from 'react';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './mainArea.css';
import PaginationType from '../types/paginationType';

function MyPagination(props: PaginationType) {
  return (
    <div className='PaginationStyle'>
      <IconButton>
        <NavigateBeforeIcon onClick={props.previousPage}/>
      </IconButton>
      <IconButton>
        <NavigateNextIcon onClick={props.nextPage}/>
      </IconButton>
    </div>
    
  );
}

export default MyPagination;