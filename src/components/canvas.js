import React from "react";
import Sketch from "react-p5";
import JoyStick from "./joyStick";

	let joyStick;

    function Canvas() {

		const setup = (p5, canvasParentRef) => {
			p5.createCanvas(150, 150).parent(canvasParentRef);
			joyStick = new JoyStick(70, p5.height - 70, 120, p5)
		};

		const draw = (p5) => {
			p5.background(33, 37, 41);
			if(joyStick.update !== undefined) joyStick.update();
			joyStick.render();
		};

		const touchStarted = () => {
			joyStick.activateJoystick(true);
		}

		const touchEnded = () => {
			joyStick.activateJoystick(false);
		}

		return <Sketch setup={setup} draw={draw} touchStarted={touchStarted} touchEnded={touchEnded} />;
	};

export default Canvas;
