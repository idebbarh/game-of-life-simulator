import { useState } from "react";
import { numberOfRows, numberOfColumns } from "../../data/constants";

const initalGrid = new Array(numberOfRows)
  .fill(0)
  .map(() => new Array(numberOfColumns).fill(0));

interface useGridReturn {
  grid: (0 | 1)[][];
  updateGrid: (rowIndex: number, cellIndex: number) => void;
  clearGrid: () => void;
}

function useGrid(): useGridReturn {
  const [grid, setGrid] = useState<(0 | 1)[][]>(initalGrid);

  function updateGrid(rowIndex: number, cellIndex: number): void {
    setGrid((prevState) => {
      return prevState.map((row2, rowIndex2) => {
        return row2.map((cell2, cellIndex2) =>
          rowIndex === rowIndex2 && cellIndex === cellIndex2
            ? cell2
              ? 0
              : 1
            : cell2
        );
      });
    });
  }

  function clearGrid() {
    setGrid(initalGrid);
  }

  return { grid, updateGrid, clearGrid };
}
export default useGrid;
