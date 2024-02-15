import "./App.css";
import Home from "./components/Home";
import { experienceData } from "./data/ExperienceData";
import ExperienceContainer from "./components/ExperienceContainer";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import { navItems } from "./data/NavItemsData";

function App() {
  return (
    <div className="flex App ">
      <Sidebar navItems={navItems} />
      <Home>
        <ExperienceContainer experiences={experienceData} />
        <Timeline />
      </Home>
    </div>
  );
}

export default App;
