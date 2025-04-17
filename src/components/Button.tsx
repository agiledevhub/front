import { useState } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';

  color?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const getClassName = () => {
    const baseClass =
      'w-full bg-highlight text-gray-800 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200';
    if (!props.color || props.color === 'primary') {
      return baseClass + ' button-primary';
    }

    if (props.color === 'secondary') {
      return baseClass + ' button-secondary';
    }
    if (props.color === 'accent') {
      return baseClass + ' button-accent';
    }
    return baseClass;
  };

  const className = getClassName();

  return (
    <button
      className={className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
