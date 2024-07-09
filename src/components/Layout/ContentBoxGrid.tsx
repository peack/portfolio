import React from "react";

interface ContentBoxGridProps {
  children?: React.ReactNode;
  id?: string;
  gridCol?: number;
  gridRow?: number;
  sizing?: string;
  extraClass?: string;
}

const ContentBoxGrid: React.FC<ContentBoxGridProps> = ({
  children,
  id,
  gridCol,
  gridRow,
  sizing = false,
  extraClass,
}) => {
  return (
    <div
      id={id}
      className={`
        content-box
         grid lg:grid ${gridCol ? "lg:grid-cols-" + gridCol : "lg:grid-cols-3"}
          ${gridRow ? "lg:grid-row-" + gridRow : "lg:grid-rows-3"}
           gap-2 ${sizing ? sizing : "min-h-50vh max-h-75vh"} 
            bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md 
            p-3 lg:p-8 
            m-2 mr-7 lg:m-7 
            font-sans 
            min-w-fit
            min-h-fit
            ${extraClass}
            `}
    >
      {children}
    </div>
  );
};

export default ContentBoxGrid;
