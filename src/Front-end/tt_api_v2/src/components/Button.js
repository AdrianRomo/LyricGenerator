import React from 'react';
import './css/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  buttonId,
  children,
  type,
  onClick,
  buttonClass,
  buttonStyle,
  buttonSize,
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