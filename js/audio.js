class AudioManager {
	constructor() {
	    this.moveSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
	    this.rotateSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
	    this.clearSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    
	    this.moveSound.volume = 0.2;
	    this.rotateSound.volume = 0.2;
	    this.clearSound.volume = 0.3;
	}
    
	playMove() {
	    this.moveSound.currentTime = 0;
	    this.moveSound.play();
	}
    
	playRotate() {
	    this.rotateSound.currentTime = 0;
	    this.rotateSound.play();
	}
    
	playClear() {
	    this.clearSound.currentTime = 0;
	    this.clearSound.play();
	}
    }