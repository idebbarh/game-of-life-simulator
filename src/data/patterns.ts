import { numberOfColumns, numberOfRows } from "./constants";

export interface PatternType {
  [key: string]: number[][];
}
const centerX = Math.floor(numberOfColumns / 2);

const centerY = Math.floor(numberOfRows / 2);

const patterns: PatternType = {
  glider: [
    [centerY - 1, centerX + 1],
    [centerY, centerX - 1],
    [centerY, centerX + 1],
    [centerY + 1, centerX],
    [centerY + 1, centerX + 1],
  ],
  blinker: [
    [centerY, centerX - 1],
    [centerY, centerX],
    [centerY, centerX + 1],
  ],
  toad: [
    [centerY - 1, centerX - 1],
    [centerY - 1, centerX],
    [centerY - 1, centerX + 1],
    [centerY, centerX - 2],
    [centerY, centerX - 1],
    [centerY, centerX],
  ],
  beacon: [
    [centerY - 2, centerX - 2],
    [centerY - 2, centerX - 1],
    [centerY - 1, centerX - 2],
    [centerY + 1, centerX + 1],
    [centerY, centerX + 1],
    [centerY + 1, centerX],
  ],
  pulsar: [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 10],
    [2, 11],
    [2, 12],
    [4, 2],
    [5, 2],
    [6, 2],
    [4, 7],
    [5, 7],
    [6, 7],
    [4, 9],
    [5, 9],
    [6, 9],
    [4, 14],
    [5, 14],
    [6, 14],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 10],
    [7, 11],
    [7, 12],
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 10],
    [9, 11],
    [9, 12],
    [10, 2],
    [11, 2],
    [12, 2],
    [10, 7],
    [11, 7],
    [12, 7],
    [10, 9],
    [11, 9],
    [12, 9],
    [10, 14],
    [11, 14],
    [12, 14],
    [14, 4],
    [14, 5],
    [14, 6],
    [14, 10],
    [14, 11],
    [14, 12],
  ],
  pentadecathlon: [
    [centerY - 4, centerX - 2],
    [centerY - 3, centerX - 2],
    [centerY - 2, centerX - 3],
    [centerY - 2, centerX - 1],
    [centerY - 1, centerX - 2],
    [centerY, centerX - 2],
    [centerY + 1, centerX - 2],
    [centerY + 2, centerX - 3],
    [centerY + 2, centerX - 1],
    [centerY + 3, centerX - 2],
    [centerY + 4, centerX - 2],
    [centerY + 5, centerX - 2],
  ],
  lwss: [
    [centerY - 2, centerX - 1],
    [centerY - 2, centerX],
    [centerY - 1, centerX - 2],
    [centerY, centerX - 2],
    [centerY + 1, centerX - 2],
    [centerY + 1, centerX],
    [centerY + 2, centerX - 2],
    [centerY + 2, centerX - 1],
    [centerY + 2, centerX],
  ],
  mwss: [
    [1, 2],
    [1, 3],
    [2, 1],
    [3, 1],
    [4, 1],
    [4, 4],
    [5, 1],
    [5, 5],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
  ],
  hwss: [
    [1, 2],
    [1, 3],
    [2, 1],
    [3, 1],
    [4, 1],
    [4, 5],
    [5, 1],
    [5, 6],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
  ],
  gospel_glider_gun: [
    [5, 1],
    [5, 2],
    [6, 1],
    [6, 2],
    [3, 13],
    [4, 11],
    [4, 13],
    [5, 3],
    [5, 4],
    [5, 10],
    [5, 11],
    [6, 3],
    [6, 4],
    [6, 10],
    [6, 12],
    [6, 13],
    [7, 5],
    [7, 9],
    [8, 4],
    [8, 10],
    [9, 3],
    [9, 4],
    [9, 10],
    [9, 11],
    [10, 2],
    [10, 3],
    [10, 9],
    [10, 10],
    [11, 1],
    [11, 2],
    [12, 1],
    [12, 2],
  ],
};

export default patterns;
