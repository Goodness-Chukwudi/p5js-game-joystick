

class JoyStick {

    socket = new WebSocket("wss://weather-man-map.herokuapp.com");
    JOYSTICK_COLOR = [255, 255, 150, 40];
    JOYSTICK_INNER_COLOR = [255, 255, 150];
    controls;
    finger;
    stickPosition;
    value;
    position;
    radius;
    p5;

    constructor(x, y, radius, p5Instance) {
        this.p5 = p5Instance;
        this.position = this.p5.createVector(x, y);
        this.radius = radius;
        this.stickPosition = this.p5.createVector(x, y);
        this.controls = false;
        this.value = this.p5.createVector(0, 0);

    }

    render = function() {
        
        this.p5.stroke(...this.JOYSTICK_COLOR);
        this.p5.strokeWeight(3);
        this.p5.fill(...this.JOYSTICK_COLOR);
        this.p5.ellipse(this.position.x, this.position.y, this.radius);
        
        this.p5.fill(...this.JOYSTICK_INNER_COLOR);
        this.p5.strokeWeight(5);
        this.p5.line(this.position.x, this.position.y, this.stickPosition.x, this.stickPosition.y);
        this.p5.strokeWeight(0);
        this.p5.ellipse(this.stickPosition.x, this.stickPosition.y, this.radius / 3);
            
            
    }

    update = function() { 
        if(this.controls) {
            this.finger = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
            this.stickPosition = this.p5.createVector(this.finger.x - this.position.x, this.finger.y - this.position.y);
            this.stickPosition.limit(this.radius / 2 );
            this.value.x = this.stickPosition.x;
            this.value.y = this.stickPosition.y;
            this.stickPosition = this.p5.createVector(this.position.x + this.stickPosition.x, this.position.y + this.stickPosition.y);

            const x = this.getX(10), y = this.getY(1);
			const data = JSON.stringify({x, y});
			this.socket.send(data);
        }

        return {x: 0, y: 0};
    }

    clicked() {
        this.activateJoystick(this.p5.mouseX < this.p5.windowWidth / 2)
    }

    activateJoystick(isAllowed) {
        this.finger = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
        const distance = this.p5.dist(this.finger.x, this.finger.y, this.position.x, this.position.y);
        if (distance < this.radius / 2 && isAllowed) {
            this.controls = true;
        } else {
            this.stickPosition.x = this.position.x;
            this.stickPosition.y = this.position.y;
            this.controls = false;
        }
    }

    getX(number) {
        this.value = this.value.mult(number);
        return this.value.x;
    }

    getY(number) {
        this.value = this.value.mult(number);
        return this.value.y;
    }
    
}

export default JoyStick;
