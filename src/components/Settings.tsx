import patterns from "../data/patterns";

interface SettingsProps {
  clearGrid: () => void;
  startSimulation: () => void;
  endSimulation: () => void;
  cellsStateTracker: () => void;
  livingCells: number;
  setPattern: (pattern: string) => void;
}

function Settings({
  clearGrid,
  startSimulation,
  endSimulation,
  cellsStateTracker,
  livingCells,
  setPattern,
}: SettingsProps) {
  return (
    <div className="w-screen h-[100px] flex flex-wrap items-center justify-center gap-4">
      <button
        className="p-2 bg-green-500 text-white rounded-md"
        onClick={startSimulation}
      >
        Start Simulation
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded-md"
        onClick={endSimulation}
      >
        End Simulation
      </button>
      <button
        className="p-2 bg-yellow-500 text-white rounded-md"
        onClick={cellsStateTracker}
      >
        Next Generation
      </button>
      <button
        className="p-2 bg-gray-500 text-white rounded-md"
        onClick={clearGrid}
      >
        Clear Grid
      </button>
      <select
        className="p-2 bg-blue-500 text-white rounded-md"
        onChange={(e) => setPattern(e.target.value)}
      >
        <option value="default">Select a pattern</option>
        {Object.entries(patterns).map(([key, _]) => {
          return (
            <option value={key} key={key}>
              {key}
            </option>
          );
        })}
      </select>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <p className="text-black">number of living cells: {livingCells}</p>
      </div>
    </div>
  );
}

export default Settings;
