class Board {
	constructor() {
	    this.grid = Array(ROWS).fill().map(() => Array(COLS).fill(0));
	}
    
	draw() {
	    this.grid.forEach((row, y) => {
		row.forEach((value, x) => {
		    if (value) {
			drawBlock(x, y, value);
		    }
		});
	    });
	}
    
	collide(piece) {
	    for (let y = 0; y < piece.shape.length; y++) {
		for (let x = 0; x < piece.shape[y].length; x++) {
		    if (piece.shape[y][x] !== 0 &&
			(this.grid[y + piece.y] &&
			this.grid[y + piece.y][x + piece.x]) !== 0) {
			return true;
		    }
		}
	    }
	    return false;
	}
    }