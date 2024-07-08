import meTall from "../assets/me_wizard_2.jpg";
import introData from "../data/Intro.json";
import React from "react";
import ContentBoxGrid from "./Layout/ContentBoxGrid.tsx";

interface HomePageProps {
  id: string;
}

const HomePage: React.FC<HomePageProps> = ({ id }) => {
  return (
    <ContentBoxGrid
      id={id}
      extraClass="grid-cols-1 md:grid-cols-3"
      sizing="md:max-h-80vh  "
    >
      <div
        className={`name-title sm:col-span-1 sm:order-1 row-span-2 flex items-center justify-center order-2 col-span-full  `}
      >
        <div className=" font-[Molot] text-5xl pl-5 p-4  ">
          <span className="">MIKAEL </span> <br />
          <span className=" text-right">&nbsp;&nbsp;GALLIOT</span>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2 row-span-2 flex items-center justify-center lg:items-end lg:justify-end order-1 ">
        <img
          className="rounded-2xl object-cover bg-almost-white border-4 max-h-40vh md:max-h-60vh lg:max-h-50vh"
          src={meTall}
          alt="tall portrait"
        />
      </div>
      <div className="col-span-3 order-4 content-center">
        <p>{introData.introduction}</p>
      </div>
    </ContentBoxGrid>
  );
};

export default HomePage;
