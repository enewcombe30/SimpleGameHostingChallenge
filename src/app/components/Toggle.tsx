import { useState } from "react";

interface props {
  label: string;
  labelPosition?: string;
  onToggle: (enabled: boolean) => void;
}

export default function Toggle({ label, labelPosition, onToggle }: props) {
  const [enabled, setEnabled] = useState<boolean>(false);

  const handleToggle = () => {
    setEnabled(!enabled);
    onToggle(!enabled);
  };
  return (
    <>
      <div className="w-content flex">
        <div
          className={`my-auto mr-2 text-xs text-[#878c8d] hidden ${
            labelPosition === "left" && "!block"
          }`}
        >
          {label}
        </div>
        <div
          className="md:w-[4rem] md:h-[2.18rem] xs:w-[3rem] xs:h-[1.75rem] pl-1 md:pt-[0.2rem] xs:pt-[0.15rem] rounded-full bg-gray-800 border-2 border-gray-400 cursor-pointer"
          onClick={() => handleToggle()}
        >
          <div
            className={`my-auto md:h-[1.5rem] md:w-[1.5rem] xs:w-[1.2rem] xs:h-[1.2rem] rounded-full bg-gray-500 relative  transition-transform ${
              enabled && "xs:translate-x-[1.06rem] md:translate-x-[1.75rem]"
            }`}
          ></div>
        </div>
        <div
          className={`my-auto ml-2 text-[0.5rem] text-[#878c8d] hidden ${
            labelPosition === "right" && "!block"
          }`}
        >
          {label}
        </div>
      </div>
    </>
  );
}
