import React from "react";

import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ isFilterTab, isActiveTab, tab, handleClick }) => {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroudColor: snap.color, opacity: 0.5 }
      : { backgroudColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/2 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
