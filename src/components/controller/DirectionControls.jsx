import rightControl from "../../images/arrow right.png"
import leftControl from "../../images/arrow left.png"
import upControl from "../../images/arrow up.png"
import downControl from "../../images/arrow down.png"


    function DirectionControls(props) {


		return (
            // onMouseDown and onMouseUp events were used to include support for non-touch desktop browsers also
            // I would have used redux for state management, but because of the complaint around libraries, I chose to use props and useState hook
            <>
                <div onTouchStart={() => props.moveHorizontal(true)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveHorizontal(true)} onMouseUp={props.stopMovement}
                    className="position-absolute top-50 end-0 translate-middle-y right">
                    <img className="img-fluid" src={rightControl} alt="right"/>
                </div>

                <div onTouchStart={() => props.moveHorizontal(false)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveHorizontal(false)} onMouseUp={props.stopMovement}
                    className="position-absolute top-50 start-0 translate-middle-y left">
                    <img className="img-fluid" src={leftControl} alt="left"/>
                </div>

                <div onTouchStart={() => props.moveVertical(false)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveVertical(false)} onMouseUp={props.stopMovement}
                    className="position-absolute top-0 start-50 translate-middle-x up">
                    <img className="img-fluid" src={upControl} alt="up"/>
                </div>

                <div onTouchStart={() => props.moveVertical(true)} onTouchEnd={props.stopMovement}
                    onMouseDown={() => props.moveVertical(true)} onMouseUp={props.stopMovement}
                    className="position-absolute bottom-0 start-50 translate-middle-x down">
                    <img className="img-fluid" src={downControl} alt="down"/>
                </div>
            </>
        );
	};

export default DirectionControls;
