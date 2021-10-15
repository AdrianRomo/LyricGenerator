import React from 'react';
import '../css/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  buttonId,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  isEnabled
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
        id={buttonId}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        disabled={isEnabled}
      >
        {children}
      </button>
  );
};