import meTall from "../assets/me_wizard_2.jpg";
import introData from "../data/Intro.json";
import React from "react";
import ContentBoxGrid from "./Layout/ContentBoxGrid.tsx";

interface HomePageProps {
  id: string;
}

const HomePage: React.FC<HomePageProps> = ({ id }) => {
  return (
    <ContentBoxGrid id={id}>
      <div className={`col-span-1 row-span-2 flex items-center`}>
        <h1>MIKAEL GALLIOT</h1>
      </div>
      <div className="col-span-2 row-span-2 flex items-center justify-center lg:items-end lg:justify-end  ">
        <img
          className="rounded-2xl object-cover bg-almost-white border-4 sm:max-h-50vh lg:max-h-60vh"
          src={meTall}
          alt="tall portrait"
        />
      </div>
      <div className="col-span-3">
        <p>{introData.introduction}</p>
      </div>
    </ContentBoxGrid>
  );
};

export default HomePage;
