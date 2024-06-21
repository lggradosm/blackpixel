"use client";
import { useVisibility } from "@/hooks/useVisibility";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ServiceSection() {
  const infoState = useVisibility();
  const [closeInfo, setCloseInfo] = useState(false);
  const closeInfoModal = () => {
    setTimeout(() => {
      infoState.disable();
      setCloseInfo(false);
    }, 250);
    setCloseInfo(true);
  };
  return (
    <div className="h-full">
      <button
        onClick={infoState.active}
        className="flex items-center h-full hover:text-primary duration-200 font-bold"
      >
        Services
      </button>
      {infoState.visibility && (
        <div className=" w-screen h-screen absolute  top-0 left-0 backdrop-blur-[2px] ">
          <div
            className={`py-10 px-4 bg-neutral-100   ${
              closeInfo
                ? "animate-disappearTop -translate-y-full"
                : "animate-appearToTop translate-y-[0px]"
            } `}
          >
            <div className="flex justify-between">
              <h2 className="animate-appearComponent text-6xl font-bold text-black">SERVICES</h2>
              <button className="group block w-12 h-12  " onClick={closeInfoModal}>
                <XMarkIcon className="w-6 text-black group-hover:scale-110 duration-200" />
              </button>
            </div>
          </div>
          <div onClick={closeInfoModal} className="w-full h-full "></div>
        </div>
      )}
    </div>
  );
}
