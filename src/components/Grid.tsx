function Grid() {
  const cells = new Array(10).fill(0).map((_, i) => {
    return <div key={i}>{i}</div>;
  });
  return <div>{cells}</div>;
}

export default Grid;
