
    function DirectionControls(props) {

		return (
            // onMouseDown and onMouseUp events were used to include support for non-touch desktop browsers also
            // I would have used redux for state management, but because of the complaint around libraries, I chose to use props and useState hook
            <>
                <div onTouchStart={() => props.moveHorizontal(true)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveHorizontal(true)} onMouseUp={props.stopMovement}
                    className="position-absolute top-50 end-0 translate-middle-y right arrow-right"
                >
                </div>

                <div onTouchStart={() => props.moveHorizontal(false)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveHorizontal(false)} onMouseUp={props.stopMovement}
                    className="position-absolute top-50 start-0 translate-middle-y left arrow-left"
                >
                </div>

                <div onTouchStart={() => props.moveVertical(false)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveVertical(false)} onMouseUp={props.stopMovement}
                    className="position-absolute top-0 start-50 translate-middle-x up arrow-up"
                >
                </div>

                <div onTouchStart={() => props.moveVertical(true)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveVertical(true)} onMouseUp={props.stopMovement}
                    className="position-absolute bottom-0 start-50 translate-middle-x down arrow-down"
                >
                </div>
            </>
        );
	};

export default DirectionControls;
