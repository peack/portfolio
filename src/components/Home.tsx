import React, { FC } from "react";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <div className="main-content content-box flex-grow overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
};

export default Home;
