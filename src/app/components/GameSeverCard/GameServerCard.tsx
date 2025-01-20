import { ServerData } from "@/types/types";
import useGameServerCard from "./useGameServerCard";

interface props {
  data: ServerData;
  isFirst: boolean;
}

export default function GameServerCard({ data, isFirst }: props) {
  const {
    name,
    game,
    players,
    isOnline,
    capitaliseFirstChar,
    handleServerStatus,
    serverStatus,
  } = useGameServerCard(data);

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-lg p-2 w-full h-fit max-w-[24rem] border border-gray-400 dark:border-gray-600 flex
        ${isFirst && "mt-4"}
       `}
    >
      <div>
        <h2 className="w-fit text-xl font-bold mb-2">{name}</h2>
        <div className="text-gray-700 dark:text-gray-300">
          <b>Game:</b> {game}
        </div>
        <div className="text-gray-700 dark:text-gray-300">
          <b>Players:</b> {players}
        </div>
      </div>
      <div className="ml-auto pl-2">
        <h2
          className={`w-fit mr-0.5 text-xl font-bold mb-2 ${
            isOnline ? "text-green-600" : "text-red-600"
          }`}
        >
          {capitaliseFirstChar(serverStatus)}
        </h2>
        <button
          onClick={() => handleServerStatus(serverStatus)}
          className={`cursor-pointer text-xs border-2 p-1 rounded-md min-w-20 ${
            isOnline ? "border-red-600" : "border-green-600"
          }`}
        >
          {serverStatus === "online" ? "Stop Server" : "Start Server"}
        </button>
      </div>
    </div>
  );
}
