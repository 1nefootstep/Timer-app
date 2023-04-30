import React, { useState } from "react";
import ConfigToggle from "./ConfigToggle";
import timerConfigs from "./timerConfigs";
import Timer from "./Timer";

function App() {
  const [activeConfig, setActiveConfig] = useState(timerConfigs[0]);

  const handleConfigChange = (config) => {
    setActiveConfig(config);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-4">
      <h1 className="text-4xl font-bold mb-8">Timers</h1>
      {activeConfig.description && activeConfig.description.trim() !== "" && (
        <div
          className="w-[36rem] h-36 mb-8 p-4 bg-white shadow rounded-lg overflow-y-auto"
          style={{ lineHeight: "1.5", fontSize: "0.75rem" }}
        >
          <p className="text-gray-500">
            {formatDescription(activeConfig.description)}
          </p>
        </div>
      )}
      <ConfigToggle onConfigChange={handleConfigChange} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {activeConfig.timers.map((timer, index) => (
          <Timer
            key={`${activeConfig.id}_${timer.title}`}
            duration={timer.duration}
            title={timer.title}
            colorChangeThreshold={timer.colorChangeThreshold}
          />
        ))}
      </div>
    </div>
  );
}

function formatDescription(description) {
  return description.split("\n").map((line, index) => (
    <p key={index} className="mb-1 mt-1">
      {line}
    </p>
  ));
}

export default App;
