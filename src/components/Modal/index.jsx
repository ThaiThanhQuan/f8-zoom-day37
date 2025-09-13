import clsx from "clsx";
import PropTypes from "prop-types";
import { CircleX } from 'lucide-react';

import styles from './Modal.module.scss';
import { useEffect } from "react";

function Modal({
        isOpen = false, 
        onAfterOpen, 
        onAfterClose, 
        onRequestClose, 
        closeTimeoutMS = 0, 
        overlayClassName, 
        className, 
        bodyOpenClassName, 
        htmlOpenClassName, 
        shouldCloseOnOverlayClick = true, 
        shouldCloseOnEsc = true, 
        children
}) {

    const handleRequestClose = () => {
        setTimeout(onRequestClose, closeTimeoutMS);
    };

    useEffect(() => {
        if(isOpen){
            onAfterOpen?.()   
        }else{
            onAfterClose?.()
        }
        
    },[isOpen, onAfterClose, onAfterOpen])

    useEffect(() => {
         if (!shouldCloseOnEsc) return;

        const handle = (e) => {
            if (e.code === "Escape") {
                handleRequestClose();
                onRequestClose()
            }
        };

        if(isOpen){
            document.addEventListener("keyup", handle);
        }
        return () => {
            document.removeEventListener("keyup", handle);
        };
    },[handleRequestClose, isOpen, shouldCloseOnEsc])

    useEffect(() => {
        document.body.classList.add(bodyOpenClassName)
        document.documentElement.classList.add(htmlOpenClassName)

        return () => {
            document.body.classList.remove(bodyOpenClassName)
            document.documentElement.classList.remove(htmlOpenClassName)
        }
    },[bodyOpenClassName, htmlOpenClassName])

    if (!isOpen) return null;
    return ( 
        <div className={clsx(styles.modal)}>
            <div className={clsx(styles.content, className)}>
                
                <div className={styles.body}>{children}</div>

                   <CircleX className={styles.closeBtn}
                    onClick={handleRequestClose}/>
            </div>

            <div
                className={clsx(styles.overlay, overlayClassName)}
                onClick={() => {
                    if(shouldCloseOnOverlayClick)
                    handleRequestClose()
                }}
            />
        </div>
     );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    children: PropTypes.node.isRequired

}
export default Modal;