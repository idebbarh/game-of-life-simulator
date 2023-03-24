interface SettingsProps {
  clearGrid: () => void;
  startSimulation: () => void;
  endSimulation: () => void;
}

function Settings({
  clearGrid,
  startSimulation,
  endSimulation,
}: SettingsProps) {
  return (
    <div className="w-screen h-[100px] flex flex-wrap items-center justify-center gap-4">
      <button
        className="w-32 h-10 bg-green-500 text-white rounded-md"
        onClick={startSimulation}
      >
        Start Simulation
      </button>
      <button
        className="w-32 h-10 bg-red-500 text-white rounded-md"
        onClick={endSimulation}
      >
        End Simulation
      </button>
      <button
        className="w-32 h-10 bg-gray-500 text-white rounded-md"
        onClick={clearGrid}
      >
        Clear Grid
      </button>
    </div>
  );
}

export default Settings;
