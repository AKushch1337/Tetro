class Piece {
	constructor(shape, color) {
	    this.shape = shape;
	    this.color = color;
	    this.y = 0;
	    this.x = Math.floor(COLS / 2) - Math.floor(shape[0].length / 2);
	}
    
	draw() {
	    this.shape.forEach((row, y) => {
		row.forEach((value, x) => {
		    if (value) {
			drawBlock(x + this.x, y + this.y, this.color);
		    }
		});
	    });
	}
	rotate() {
		const rotated = this.shape[0].map((_, i) =>
		    this.shape.map(row => row[row.length - 1 - i])
		);
		return rotated;
	    }
    }
    
function drawBlock(x, y, color) {
	ctx.fillStyle = COLORS[color];
	ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
	ctx.strokeStyle = '#000';
	ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1);
}