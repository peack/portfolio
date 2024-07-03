import React, { FC } from "react";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return <div className="flex-grow overflow-y-auto">{children}</div>;
};

export default Home;
