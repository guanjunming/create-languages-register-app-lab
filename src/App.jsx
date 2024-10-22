import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LanguagesPanel from "./components/LanguagesPanel";
import UsersPanel from "./components/UsersPanel";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("languages");

  const handleSelectTab = (tab) => {
    if (selectedTab != tab) {
      setSelectedTab(tab);
    }
  };

  return (
    <>
      <NavBar onSelectTab={handleSelectTab} selectedTab={selectedTab} />
      {selectedTab === "languages" && <LanguagesPanel />}
      {selectedTab === "users" && <UsersPanel />}
    </>
  );
};

export default App;
