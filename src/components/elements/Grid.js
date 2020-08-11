import React from 'react';
import { StyledGrid, StyledGridContent } from './../styles/StyledGrid';

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>
      {children.map((child, i) => (
        <div key={i} className='grid-element'>
          {child}
        </div>
      ))}
    </StyledGridContent>
  </StyledGrid>
);

export default Grid;
