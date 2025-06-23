"use client";

import { useState } from "react";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Experience from "./Experience";

const tabs = ["Projects", "Experience", "Tech Stack"];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Projects");

  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return <Projects />;
      case "Experience":
        return <Experience />;
      case "Tech Stack":
        return <TechStack />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <nav
        className="mb-4 flex space-x-4"
        role="tablist"
        aria-label="Profile Sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab.replace(/\s/g, "").toLowerCase()}`}
            id={`tab-${tab.replace(/\s/g, "").toLowerCase()}`}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium transition-all ${
              activeTab === tab
                ? "border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <section
        id={`panel-${activeTab.replace(/\s/g, "").toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.replace(/\s/g, "").toLowerCase()}`}
        className="text-sm text-zinc-700 transition-all dark:text-zinc-300"
      >
        {renderContent()}
      </section>
    </div>
  );
};

export default ProfileTabs;
