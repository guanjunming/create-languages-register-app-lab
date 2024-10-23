import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import LanguagesSection from "./components/LanguagesSection";
import UsersSection from "./components/UsersSection";

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
      {selectedTab === "languages" && <LanguagesSection />}
      {selectedTab === "users" && <UsersSection />}
    </QueryClientProvider>
  );
};

export default App;
