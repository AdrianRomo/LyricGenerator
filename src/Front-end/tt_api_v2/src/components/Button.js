import React from 'react';
import './css/Button.css';

export const Button = ({
  buttonId,
  children,
  type,
  onClick,
  buttonClass,
  isEnabled
}) => {
  return (
    <button
        id={buttonId}
        className={`${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={isEnabled}
      >
        {children}
      </button>
  );
};