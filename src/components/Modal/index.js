import React from "react";
import styles from "./index.module.scss"

class Modal extends React.Component {
    render() {
        return (
            <div style={!this.props.show ? { opacity: 0, display: 'none' } : { opacity: 1 }} className={styles.modalWindow}>
                <div>
                    { /* eslint-disable-next-line*/ }
                    <a id="modalClose" title="Close" onClick={() => this.props.onClose()} className={styles.modalClose}>
                        <i className="material-icons">
                            close
                        </i>
                    </a>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;