import { useState } from 'react';

interface InputProps {
  type: string;
  label: string;
  value: string;
  htmlFor: string;
  hasLink?: boolean;
  linkText?: string;
}

export const Input = ({
  type,
  label,
  value,
  htmlFor,
  hasLink,
  linkText,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <label className='text-sm ' htmlFor={htmlFor}>
          {label}
        </label>

        {hasLink && (
          <a
            href='#'
            className='text-[10px] hover:underline cursor-pointer text-default-hover duration-100'
          >
            {linkText}
          </a>
        )}
      </div>

      <input
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        type={type}
        name={htmlFor}
        className='w-full border-gray-300 border rounded-lg p-1 mt-2'
      />
    </div>
  );
};
