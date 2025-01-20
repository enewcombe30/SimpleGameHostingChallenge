import { ServerData } from "@/types/types";
import useServerCard from "./useServerCard";
import { capitaliseFirstChar, renderComma } from "../hooks/useTextFormatting";

interface props {
  data: ServerData;
  isFirst: boolean;
}

export default function ServerCard({ data, isFirst }: props) {
  const {
    name,
    game,
    players,
    region,
    version,
    mods,
    isOnline,
    handleServerStatus,
    serverStatus,
  } = useServerCard(data);

  const renderMods = () => {
    return mods.map((mod, index) => (
      <span key={index}>
        {mod}
        {renderComma(index, mods.length)}
      </span>
    ));
  };

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md rounded-lg p-1.5 w-full h-fit max-w-[24rem] border border-gray-400 dark:border-gray-600 flex
        ${isFirst && "mt-4"}
       `}
    >
      <div className="h-fit w-fit">
        <h2 className="w-fit lg:text-xl md:text-[1.2rem] sm:text-lg xs:text-[1rem] font-bold mb-2">
          {name}
        </h2>
        <div className="text-gray-700 dark:text-gray-300">
          <div>
            <b>Game:</b> {game}
          </div>
          <div>
            <b>Region:</b> {region}
          </div>
          <div>
            <b>Players:</b> {players}
          </div>
          <div>
            <b>Version:</b> {version}
          </div>
          <div className="flex relative">
            <b>Mods:</b>
            <span className="ml-1 min-w-[13rem] absolute left-[2.2rem]">
              {" "}
              {renderMods()}
            </span>
          </div>
        </div>
      </div>
      <div className="ml-auto w-fit h-fit">
        <h2
          className={`w-fit md:text-xl sm:text-lg xs:text-[1rem] font-bold mb-2 mx-auto ${
            isOnline ? "text-green-600" : "text-red-600"
          }`}
        >
          {capitaliseFirstChar(serverStatus)}
        </h2>
        <button
          onClick={() => handleServerStatus(serverStatus)}
          className={`cursor-pointer md:text-[0.75rem] sm:text-xs xs:text-[0.625rem] text-md border-2 p-1 rounded-md min-w-[5.7rem] text-gray-200 ${
            isOnline
              ? "bg-red-600 border-red-600"
              : "bg-green-600 border-green-600"
          }`}
        >
          <b>{serverStatus === "online" ? "Stop Server" : "Start Server"}</b>
        </button>
      </div>
    </div>
  );
}
