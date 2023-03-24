import { useState } from "react";
import Grid from "./components/Grid";
import Settings from "./components/Settings";
import useGrid from "./utils/hooks/useGrid";

function App() {
  const { grid, updateGrid, clearGrid } = useGrid();
  const [intervalId, setIntervalId] = useState<number | null>(null);

  function cellsStateTracker() {}

  function startSimulation(): void {
    if (!intervalId) {
      const intervalId = window.setInterval(() => {
        cellsStateTracker();
      }, 300);
      setIntervalId(intervalId);
    }
  }

  function endSimulation(): void {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  return (
    <div className="App">
      <Grid grid={grid} updateGrid={updateGrid} />
      <Settings
        clearGrid={clearGrid}
        startSimulation={startSimulation}
        endSimulation={endSimulation}
      />
    </div>
  );
}

export default App;
