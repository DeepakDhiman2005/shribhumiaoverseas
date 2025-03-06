import { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import Categories from "../../configs/categories";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export interface DropDownProps {
  placeholder?: string;
  defaultValue?: string;
  name: string;
  control: any;
}

const DropDownField = ({ placeholder = "Select an option", defaultValue = "", name, control }: DropDownProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || placeholder);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Menu>
          <MenuHandler>
            <Button className="w-full text-left bg-white text-gray-800 border border-solid border-gray-700 py-2 text-[14px] hover:shadow-none shadow-none px-2 normal-case font-medium overflow-hidden rounded-lg flex justify-between items-center">
              {selectedValue}

              {selectedValue && selectedValue !== placeholder ? (
                <button
                  type="button"
                  className="bg-gray-300 text-black p-1 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent menu from opening
                    setSelectedValue(placeholder);
                    field.onChange(""); // Reset form field
                  }}
                >
                  <RxCross2 size={12} />
                </button>
              ) : (
                <IoIosArrowDown size={15} />
              )}
            </Button>
          </MenuHandler>
          <MenuList className="w-1/2 h-[300px] border-2 border-solid border-gray-300 p-2 overflow-y-scroll">
            {Categories.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  setSelectedValue(item.name || "");
                  field.onChange(item.category);
                }}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    />
  );
};

export default DropDownField;
