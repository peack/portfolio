import React, { FC } from "react";

interface HomeProps {
  children?: React.ReactNode;
  isSidebarOpen: boolean;
}

const Home: FC<HomeProps> = ({ children, isSidebarOpen }) => {
  return (
    <div
      className={`main-content max-h-screen overflow-auto ${isSidebarOpen ? "ml-48 w-full-m-192" : ""}`}
    >
      {children}
    </div>
  );
};

export default Home;
