import ActionControls from "./ActionControls";
import Circle from "./Circle";
import DirectionControls from "./DirectionControls";
import Alert from "../Alert";
import { io } from "socket.io-client";
import { useState } from "react";

    function Controller() {

        const socket = io("http://localhost:5000");
        let [error, setError] = useState(null);
        let [info, setInfo] = useState(null);
        let interval;

        function moveHorizontal(shouldIncrease) {
            interval = setInterval(() => {
                const x = shouldIncrease ? 50 : -50;
                socket.emit("x", x);
            }, 200);
        }

        function moveVertical(shouldIncrease) {
            interval = setInterval(() => {
                const y = shouldIncrease ? 1 : -1;
                socket.emit("y", y);
            },200);
        }

        socket.onerror = (event) => {
        }

        socket.on('error', message => {
            setError({title: "Socket Connection Failed!", text: "Please reload the server and try again"});
        });

        socket.on('connected', message => {
            setInfo({title: "Connection Success!", text: "Socket connected successfully"});
        });

        socket.on('moveX', newX => {
            console.log("newX ----..---", newX)
        
        });

        function stopMovement() {
            clearInterval(interval);
        }

		return (
            <div>
                <Alert 
                    info={info}
                    error={error}
                />

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
