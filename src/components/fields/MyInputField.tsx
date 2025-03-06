import React from "react";

type InputFieldProps = {
  label?: string;
  placeholder?: string;
  originalColor?: string;
  type?: string;
};

const MyInputField: React.FC<InputFieldProps> = ({
  label = "Input",
  placeholder = " ",
  originalColor = "blue-gray-500",
  type = "text",
}) => {
  return (
    <div className="relative w-full min-w-[200px] h-10">
      <input
        type={type}
        className={`peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-${originalColor} placeholder-shown:border-t-${originalColor} border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-${originalColor} focus:border-${originalColor}`}
        placeholder={placeholder}
      />
      <label
        className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-${originalColor} leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-${originalColor} transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-${originalColor} peer-focus:text-${originalColor} peer-placeholder-shown:text-${originalColor}`}
      >
        {label}
      </label>
    </div>
  );
};

export default MyInputField;
