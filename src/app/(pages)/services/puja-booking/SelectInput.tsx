import React from "react";

type Option = { value: string; label: string };

type SelectInputProps = {
  label: string;
  name: string;
  value: Option;
  options: Option[];
  onChange: (option: Option) => void;
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      <select
        name={name}
        value={value.value}
        onChange={(e) => {
          const selected = options.find(
            (opt: Option) => opt.value === e.target.value
          );
          if (selected) onChange(selected);
        }}
        className="flex justify-between rounded border border-gray-700 p-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt: Option) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
