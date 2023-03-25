import { useEffect, useRef, useState } from "react";
import { numberOfRows, numberOfColumns } from "./data/constants";
import Grid from "./components/Grid";
import Settings from "./components/Settings";
import useGrid from "./utils/hooks/useGrid";

function App() {
  const { grid, updateGrid, clearGrid, numberOfliveCells } = useGrid();
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [gridRef, numberOfliveCellsRef] = [
    useRef<typeof grid>(grid),
    useRef<typeof numberOfliveCells>(numberOfliveCells),
  ];

  useEffect(() => {
    gridRef.current = grid;
    numberOfliveCellsRef.current = numberOfliveCells;
  }, [grid, numberOfliveCells]);

  function getCellNeighborsState(row: number, col: number) {
    const neighbors: number[] = [];
    const directions: number[][] = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ];
    for (let [i, j] of directions) {
      if (
        row + i >= 0 &&
        row + i < grid.length &&
        col + j >= 0 &&
        col + j < grid[0].length
      ) {
        neighbors.push(gridRef.current[row + i][col + j]);
      }
    }

    return neighbors;
  }
  function getNumberOfLiveCells(cellsState: number[]) {
    return cellsState.filter((state) => state).length;
  }

  function cellsStateTracker() {
    for (let i = 0; i < gridRef.current.length; ++i) {
      for (let j = 0; j < gridRef.current[0].length; ++j) {
        const neighbors = getCellNeighborsState(i, j);
        const liveCells = getNumberOfLiveCells(neighbors);
        /* Any live cell with fewer than two live neighbors dies (underpopulation). */
        /* Any live cell with more than three live neighbors dies (overpopulation). */
        if (gridRef.current[i][j] && (liveCells < 2 || liveCells > 3)) {
          updateGrid(i, j);
        }
        /* Any dead cell with exactly three live neighbors becomes a live cell (reproduction). */
        if (!gridRef.current[i][j] && liveCells === 3) {
          updateGrid(i, j);
        }
      }
    }
  }

  function startSimulation(): void {
    if (!intervalId) {
      const intervalId = window.setInterval(() => {
        if (
          numberOfliveCellsRef.current < numberOfRows * numberOfColumns &&
          numberOfliveCellsRef.current > 0
        ) {
          cellsStateTracker();
        } else {
          endSimulation();
        }
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
        cellsStateTracker={cellsStateTracker}
      />
    </div>
  );
}

export default App;
