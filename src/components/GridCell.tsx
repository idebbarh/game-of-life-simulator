interface GridCellProps {
  cellState: 0 | 1;
  changeCellState: () => void;
}
function GridCell({ cellState, changeCellState }: GridCellProps) {
  return (
    <div
      className={`w-5 h-5 ${
        cellState ? "bg-active-cell-bg" : "bg-transparent"
      } border border-gray-500 
`}
      onClick={changeCellState}
    ></div>
  );
}
export default GridCell;
