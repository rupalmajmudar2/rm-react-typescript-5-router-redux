import React from "react";
import ReactDOM from "react-dom";

//NOT returning Jsx here!

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer show modals visible active">
            <div className="ui raised very padded text container segment">
                <h1>I am a modal dialog</h1>
            </div>
        </div>,
        document.querySelector('#modal-root')
    )
}

export default Modal