
    function ActionControls() {

		return (
            <>
                <div className="position-absolute top-50 end-0 translate-middle-y right action-control bg-primary rounded-circle border border-5 border-secondary"></div>

                <div className="position-absolute top-50 start-0 translate-middle-y left action-control bg-danger rounded-circle border border-5 border-secondary"></div>

                <div className="position-absolute top-0 start-50 translate-middle-x up action-control bg-warning rounded-circle border border-5 border-secondary"></div>

                <div className="position-absolute bottom-0 start-50 translate-middle-x down action-control bg-success rounded-circle border border-5 border-secondary"></div>
            </>
        );
	};

export default ActionControls;
