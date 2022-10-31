import ActionControls from "./ActionControls";
import Circle from "./Circle";
import DirectionControls from "./DirectionControls";
import Alert from "../Alert";
import { useState } from "react";

    function Controller() {

        let [error, setError] = useState(null);
        let x = 0;
        let y = 0;
        let interval;
        const socket = new WebSocket("wss://weather-man-map.herokuapp.com");
        // const socket = new WebSocket("ws://localhost:5000");

        function moveHorizontal(shouldIncrease) {
            interval = setInterval(() => {
                shouldIncrease ? x += 10 : x -= 10;
                const data = JSON.stringify({x, y});
                socket.send(data);
            }, 100);
        }

        function moveVertical(shouldIncrease) {
            interval = setInterval(() => {
                shouldIncrease ? y += 10 : y -= 10;
                const data = JSON.stringify({x, y});
                socket.send(data);
            }, 100);
        }

        socket.onerror = (event) => {
            setError({title: "Web Socket Connection Failed!", text: "Please reload the server and try again"});
        }

        function stopMovement() {
            clearInterval(interval);
        }

		return (
            <div>
                <Alert error={error} />
                <div className="bg-dark controller rounded-pill row p-5">
                    <div className="col-6 h-100 position-relative">
                        <Circle />
                        <DirectionControls
                            moveHorizontal={moveHorizontal}
                            moveVertical={moveVertical}
                            stopMovement={stopMovement}
                        />
                    </div>

                    <div className="col-6 h-100 position-relative">
                        <ActionControls />
                    </div>
                </div>
            </div>
        );
	};

export default Controller;
