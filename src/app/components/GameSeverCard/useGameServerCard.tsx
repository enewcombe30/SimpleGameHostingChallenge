import { useState } from "react";
import { ServerData } from "@/types/types";

export default function useGameServerCard(data: ServerData) {
  const { name, game, players, status } = data;
  const [serverStatus, setServerStatus] = useState<string>(status);
  const isOnline = serverStatus === "online";
  const capitaliseFirstChar = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleServerStatus = (status: string) => {
    setServerStatus(status === "online" ? "offline" : "online");
  };

  return {
    name,
    game,
    players,
    isOnline,
    capitaliseFirstChar,
    handleServerStatus,
    serverStatus,
  };
}
