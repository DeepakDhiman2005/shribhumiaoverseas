import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export interface PaginationInterface {
  totalPages?: number;
  defaultValue?: number;
  onChange?: (index: number) => void;
}

function Pagination({ totalPages = 1, defaultValue = 1, onChange }: PaginationInterface) {
  const [active, setActive] = React.useState<number>(defaultValue);

  const handlePageChange = (index: number) => {
    setActive(index);
    if (onChange) onChange(index);
  };

  const getItemProps = (index: number) => ({
    variant: active === index ? "filled" : "text" as "filled" | "text",
    color: "gray" as "gray", 
    onClick: () => handlePageChange(index),
  });

  const next = () => {
    if (active < totalPages) {
      handlePageChange(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      handlePageChange(active - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <IconButton key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Pagination;
