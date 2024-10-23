import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LanguagesPanel from "./components/LanguagesPanel";
import UsersPanel from "./components/UsersPanel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const [selectedTab, setSelectedTab] = useState("languages");

  const handleSelectTab = (tab) => {
    if (selectedTab != tab) {
      setSelectedTab(tab);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar onSelectTab={handleSelectTab} selectedTab={selectedTab} />
      {selectedTab === "languages" && <LanguagesPanel />}
      {selectedTab === "users" && <UsersPanel />}
    </QueryClientProvider>
  );
};

export default App;
