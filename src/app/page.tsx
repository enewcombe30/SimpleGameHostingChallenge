"use client";
import { useEffect, useState } from "react";
import { ServerData } from "@/types/types";
import GameServerCard from "./components/GameSeverCard/GameServerCard";
import Toggle from "./components/Toggle";

export default function Home() {
  const [serverData, setServerData] = useState<ServerData[] | null>(null);
  const [dark, setDark] = useState<boolean>(false);

  const handleDarkMode = (enabled: boolean) => {
    setDark(enabled);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  const renderServerCards = () => {
    if (!serverData || serverData.length === 0) {
      return <div className="w-fit mx-auto">{"No Servers Available  :("}</div>;
    }
    return serverData.map((data) => {
      const isFirst = data === serverData[0];
      return <GameServerCard data={data} key={data.id} isFirst={isFirst} />;
    });
  };

  return (
    <div className="m-auto grid items-center justify-items-center h-full p-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg w-fit overflow-auto max-w-4xl text-sm m-auto mb-2">
        <h1 className="text-2xl font-bold w-fit mx-auto text-gray-800 dark:text-gray-300">
          Minecraft Server List
        </h1>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:justify-items-start md:items-start">
          {renderServerCards()}
        </div>
      </div>
      <Toggle
        label={`Switch to ${dark ? "Light Mode" : "Dark Mode"}`}
        labelPosition="left"
        onToggle={(enabled) => handleDarkMode(enabled)}
      />
    </div>
  );
}
