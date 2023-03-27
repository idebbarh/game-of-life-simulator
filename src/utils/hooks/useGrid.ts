import { useEffect, useState } from "react";
import { numberOfRows, numberOfColumns } from "../../data/constants";
import patterns from "../../data/patterns";

let initialGrid = new Array(numberOfRows)
  .fill(0)
  .map(() => new Array(numberOfColumns).fill(0));

interface useGridReturn {
  grid: (0 | 1)[][];
  toggleCellState: (rowIndex: number, cellIndex: number) => void;
  clearGrid: () => void;
  numberOfliveCells: number;
  setPattern: (patter: string) => void;
}

function useGrid(): useGridReturn {
  const [grid, setGrid] = useState<(0 | 1)[][]>(initialGrid);
  const [numberOfliveCells, setNumberOfliveCells] = useState<number>(0);

  useEffect(() => {
    setNumberOfliveCells(
      grid.reduce(
        (accumulator, row) => accumulator + row.filter((cell) => cell).length,
        0
      )
    );
  }, [grid]);

  function toggleCellState(rowIndex: number, cellIndex: number): void {
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

  function setPattern(pattern: string) {
    const points = patterns[pattern];

    if (!points) {
      return;
    }

    setGrid((prevState) => {
      return prevState.map((row, ri) => {
        return row.map((_, ci) => {
          const isPresent = points.some((arr, index) => {
            return arr.every((val, i) => val === [ri, ci][i]);
          });
          return isPresent ? 1 : 0;
        });
      });
    });
  }

  function clearGrid() {
    setGrid(initialGrid);
  }

  return { grid, toggleCellState, clearGrid, numberOfliveCells, setPattern };
}
export default useGrid;
