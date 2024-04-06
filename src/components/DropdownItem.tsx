import React from "react";

interface DropdownItemProps {
  label: string;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, onClick }) => {
  return (
    <button
      className="block w-full text-left py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DropdownItem;
