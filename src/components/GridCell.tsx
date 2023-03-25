interface GridCellProps {
  cellState: 0 | 1;
  changeCellState: () => void;
}
function GridCell({ cellState, changeCellState }: GridCellProps) {
  return (
    <div
      className={`w-5 h-5 ${
        cellState ? "bg-green-500" : "bg-transparent"
      } border border-white`}
      onClick={changeCellState}
    ></div>
  );
}
export default GridCell;
