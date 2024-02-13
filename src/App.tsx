import "./App.css";
import Navbar from "./components/Sidebar";
import { navItems } from "./data/NavItemsData";

function App() {
  return (
    <>
      {/*<Home />*/}
      <Navbar navItems={navItems} />
      {/*<Timeline />*/}
    </>
  );
}

export default App;
