import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.style';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <StyledHeader>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M20.5719 14.75C20.8498 13.8832 20.9998 12.9591 20.9998 12C20.9998 10.2423 20.496 8.60233 19.6248 7.21658C19.588 7.23784 19.5454 7.25001 19.4998 7.25001H17.8539C16.968 7.25001 16.2498 7.96819 16.2498 8.85411C16.2498 9.65109 15.7995 10.3797 15.0867 10.7361L15.0061 10.7764C14.3726 11.0931 13.627 11.0931 12.9936 10.7764L12.9129 10.7361C12.2001 10.3797 11.7498 9.65109 11.7498 8.85411C11.7498 7.96819 11.0316 7.25001 10.1457 7.25001H9.99983C8.75719 7.25001 7.74983 6.24265 7.74983 5.00001V4.0647C5.27174 5.3947 3.48867 7.85158 3.08594 10.75H5.99983C7.24247 10.75 8.24983 11.7574 8.24983 13C8.24983 13.9665 9.03333 14.75 9.99983 14.75C11.2425 14.75 12.2498 15.7574 12.2498 17V20.9966C13.4963 20.9626 14.6796 20.6752 15.7498 20.1839V17C15.7498 15.7574 16.7572 14.75 17.9998 14.75H20.5719Z"
          // fill="#323232"
        />
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#323232"
          strokeWidth="2"
        />
        <path
          d="M3.5 11H6C7.10457 11 8 11.8954 8 13V13C8 14.1046 8.89543 15 10 15V15C11.1046 15 12 15.8954 12 17V20.5"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 4V5C8 6.10457 8.89543 7 10 7H10.1459C11.1699 7 12 7.83011 12 8.8541V8.8541C12 9.55638 12.3968 10.1984 13.0249 10.5125L13.1056 10.5528C13.6686 10.8343 14.3314 10.8343 14.8944 10.5528L14.9751 10.5125C15.6032 10.1984 16 9.55638 16 8.8541V8.8541C16 7.83011 16.8301 7 17.8541 7H19.5"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 19.5V17C16 15.8954 16.8954 15 18 15H20"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h1>Where in the World?</h1>

      <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </StyledHeader>
  );
}
