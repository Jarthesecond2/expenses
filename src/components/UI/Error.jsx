import React, {Fragment} from "react";
import reactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import "./Error.css";

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onConfirm} />
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="footer">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
};

const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
}

export default Error;
