import React, { useState, useEffect, useRef } from "react";
import DropdownItem from "./DropdownItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface DropdownProps {
  items: string[];
  activeCat: string;
  handleOnClick: (newCat: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  activeCat,
  handleOnClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (item: string) => {
    handleOnClick(item);
    toggleDropdown();
  };

  return (
    <div ref={dropdownRef} className="relative inline-block z-50 px-4 ">
      <button
        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 rounded inline-flex items-center"
        onClick={() => {
          toggleDropdown();
        }}
      >
        <div className="truncate">{activeCat}</div>
        <span
          onClick={(e) => {
            e.stopPropagation();
            toggleDropdown();
          }}
        >
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-auto lg:min-h-40 lg:max-h-52 min-h-10 max-h-28 p-2">
          {items.map((item) => (
            <DropdownItem
              key={item}
              label={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
