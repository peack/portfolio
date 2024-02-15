import React, { FC } from "react";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <main className="p-4 justify-center items-start bg-almost-white shadow-md">
      {children}
      <p className="text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
        asperiores dicta dolores illo iste, magni numquam officiis quaerat
        suscipit! Doloremque eaque expedita hic, incidunt itaque magni nemo
        reiciendis rerum.
      </p>
    </main>
  );
};

export default Home;
