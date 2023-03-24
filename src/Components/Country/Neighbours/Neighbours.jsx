import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNeighbours } from './Neighbours.style';
import { findCommonNamesByCountryCodes } from '../../../../helpers';

export default function Neighbours({ neighbours }) {
  const formattedNames = findCommonNamesByCountryCodes(neighbours);

  if (formattedNames.length) {
    return (
      <StyledNeighbours>
        <>
          <span>Neighbours: </span>

          {formattedNames.map((country) => {
            return (
              <Link key={country.code} to={`/${country.code}`}>
                {country.name}
              </Link>
            );
          })}
        </>
      </StyledNeighbours>
    );
  } else {
    return (
      <StyledNeighbours>
        <div data-testid="no-neighbours">
          <span>Neighbours: </span> none
        </div>
      </StyledNeighbours>
    );
  }
}
