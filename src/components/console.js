import React from "react";
import Canvas from "./canvas"

    function Console() {

		return (
            <div>
                <div className="text-center my-4 px-5">
                    <h4>
                    This virtual joystick controls the movement of an object on a map at <a href="https://p5js-joystick.netlify.app">https://p5js-joystick.netlify.app</a>
                    </h4>
                    Use the joystick on a landscape mobile browser for best experience
                </div>
                <div className="console mx-auto my-5 pt-5 ps-5 rounded-pill">
                    <div className="canvas"> <Canvas /> </div>
                </div>
            </div>
        );
	};

export default Console;
