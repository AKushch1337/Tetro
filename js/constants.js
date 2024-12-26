const BLOCK_SIZE = 30;
const COLS = 10;
const ROWS = 20;
const COLORS = [
    null,
    '#FF0D72', '#0DC2FF', '#0DFF72',
    '#F538FF', '#FF8E0D', '#FFE138', '#FF0000'
];

const PIECES = [
    [[1, 1, 1, 1]],              // I
    [[2, 0, 0], [2, 2, 2]],      // J
    [[0, 0, 3], [3, 3, 3]],      // L
    [[4, 4], [4, 4]],            // O
    [[0, 5, 5], [5, 5, 0]],      // S
    [[0, 6, 0], [6, 6, 6]],      // T
    [[7, 7, 0], [0, 7, 7]]       // Z
];