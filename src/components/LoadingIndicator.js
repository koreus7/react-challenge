import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

class LoadingIndicator extends PureComponent {
    render() {
        return (
            <div className="w-100 h-100 m-4 d-flex flex-row justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default LoadingIndicator