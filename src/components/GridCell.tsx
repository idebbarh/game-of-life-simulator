import { useEffect, useRef } from "react";

interface GridCellProps {
  cellState: 0 | 1;
  changeCellState: () => void;
}

function GridCell({ cellState, changeCellState }: GridCellProps) {
  const cellRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => { */
  /*   if (cellState) { */
  /*     cellRef.current?.scrollIntoView({ */
  /*       behavior: "smooth", */
  /*       block: "center", */
  /*       inline: "center", */
  /*     }); */
  /*   } */
  /* }, [cellState]); */

  return (
    <div
      className={`w-5 h-5 ${
        cellState ? "bg-active-cell-bg" : "bg-transparent"
      } border border-gray-500 
`}
      onClick={changeCellState}
      ref={cellRef}
    ></div>
  );
}

export default GridCell;
