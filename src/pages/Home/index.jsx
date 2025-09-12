import { useState } from "react";
import styles from './Home.module.scss'
import Modal from "../../components/Modal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>

            {isOpen && (
                <Modal
                    isOpen
                    onAfterOpen={() => console.log('Modal đã mở')}
                    onAfterClose={() => console.log('Modal đã đóng')}
                    onRequestClose={() => setIsOpen(false)}
                    closeTimeoutMS = {0}
                    overlayClassName={styles.overlayoverride}
                    className={styles.container}
                    bodyOpenClassName="modal-open"
                    htmlOpenClassName="modal-open"  
                    shouldCloseOnOverlayClick = {true}
                    shouldCloseOnEsc = {true}

                >
                    <h2>Register</h2>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default Home;