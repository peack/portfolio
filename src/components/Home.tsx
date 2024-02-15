import React, { FC } from "react";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <main className="p-4 flex-1 overflow-auto justify-center items-start bg-almost-white shadow-md">
      {children}
    </main>
  );
};

export default Home;
