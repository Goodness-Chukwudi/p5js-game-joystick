import { useState , useEffect} from "react";

    function Alert(props) {
        
        const [timeUp, setTimeUp] = useState(false);

        useEffect(() => {
            startCountDown();
          }, [timeUp]);


        function startCountDown() {
            setTimeout(() => {
                setTimeUp(true);
            }, 5000);
        }

        if (timeUp || !props.error) {
            return (<> </>);
        } else {
            return (
                <div className="text-center alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{props.error.title}</strong> {props.error.text}
                </div>
            );
        }
	};

export default Alert;
