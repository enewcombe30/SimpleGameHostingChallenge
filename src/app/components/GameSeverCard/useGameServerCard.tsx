import { useState } from "react";
import { ServerData } from "@/types/types";

export default function useGameServerCard(data: ServerData) {
  const { name, game, players, status, region, version, mods } = data;
  const [serverStatus, setServerStatus] = useState<string>(status);
  const isOnline = serverStatus === "online";

  const handleServerStatus = (status: string) => {
    setServerStatus(status === "online" ? "offline" : "online");
  };

  return {
    name,
    game,
    players,
    region,
    version,
    mods,
    isOnline,
    handleServerStatus,
    serverStatus,
  };
}
