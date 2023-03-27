import GridCell from "./GridCell";

interface GridProps {
  grid: (0 | 1)[][];
  toggleCellState: (rowIndex: number, cellIndex: number) => void;
}

function Grid({ grid, toggleCellState }: GridProps) {
  return (
    <div className="w-screen h-[calc(100vh-100px)] bg-grid-bg overflow-auto">
      {grid.map((row, rowIndex) => {
        return (
          <div className="flex" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <GridCell
                  key={cellIndex}
                  cellState={cell}
                  changeCellState={() => {
                    toggleCellState(rowIndex, cellIndex);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
