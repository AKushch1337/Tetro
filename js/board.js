class Board {
	constructor(ctx) {
	    this.ctx = ctx;
	    this.grid = Array(ROWS).fill().map(() => Array(COLS).fill(0));
	}
    
	draw() {
	    this.grid.forEach((row, y) => {
		row.forEach((value, x) => {
		    if (value) {
			drawBlock(this.ctx, x, y, value);
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
    
	merge(piece) {
	    piece.shape.forEach((row, y) => {
		row.forEach((value, x) => {
		    if (value) {
			this.grid[y + piece.y][x + piece.x] = piece.color;
		    }
		});
	    });
	}
    
	clearLines() {
	    let linesCleared = 0;
	    
	    outer: for (let y = this.grid.length - 1; y >= 0; y--) {
		for (let x = 0; x < this.grid[y].length; x++) {
		    if (this.grid[y][x] === 0) {
			continue outer;
		    }
		}
		
		const row = this.grid.splice(y, 1)[0].fill(0);
		this.grid.unshift(row);
		linesCleared++;
		y++;
	    }
	    
	    return linesCleared;
	}
    }