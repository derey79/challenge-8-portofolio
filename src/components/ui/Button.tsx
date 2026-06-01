import React from 'react';
import { type ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Base styles yang selalu applied, rounded-full
  const baseStyles =
    'font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles - SESUAIKAN dengan design Figma!
  const variantStyles = {
    primary:
      'w-48 shadow-button-inset text-base-white font-semibold bg-primary-200 hover:bg-primary-300 focus:ring-primary-100',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    // outline:
    //   'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    outline:
      'text-main-color bg-base-white dark:bg-base-black hover:bg-blue-50 focus:ring-blue-500',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
