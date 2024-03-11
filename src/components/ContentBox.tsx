import React from "react";

interface ContentBoxProps {
  children?: React.ReactNode;
  id?: string;
  gridCol?: number;
  gridRow?: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  id,
  gridCol,
  gridRow,
}) => {
  return (
    <div
      id={id}
      className={`content-box grid lg:grid ${gridCol ? "lg:grid-cols-" + gridCol : "lg:grid-cols-3"} ${gridRow ? "lg:grid-row-" + gridRow : "lg:grid-rows-3"} gap-2 min-h-70vh max-h-95vh bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-10 m-7 overflow-auto`}
    >
      {children}
    </div>
  );
};

export default ContentBox;
