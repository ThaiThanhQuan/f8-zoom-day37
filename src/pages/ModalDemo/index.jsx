import { useState } from 'react';

import styles from './ModalDemo.module.scss'
import Modal from "../../components/Modal";
import clsx from 'clsx';

function ModalDemo() {
   const [isOpen, setIsOpen] = useState(false);
   
       return (
           <div>
               <button className={clsx(styles.btn)} onClick={() => setIsOpen(true)}>Open Modal</button>
   
               {isOpen && (
                   <Modal
                       isOpen
                       onAfterOpen={() => console.log('Modal đã mở')}
                       onAfterClose={() => console.log('Modal đã đóng')}
                       onRequestClose={() => setIsOpen(false)}
                       closeTimeoutMS = {300}
                       overlayClassName={styles.overlayoverride}
                       className={styles.contentoverride}
                       bodyOpenClassName="modal-open"
                       htmlOpenClassName="modal-open"  
                       shouldCloseOnOverlayClick = {false}
                       shouldCloseOnEsc = {false}
   
                   >
                       <div className={clsx(styles.content)}>
                            <h2 className={clsx(styles.title)}>Modal</h2>
                            <p className={clsx(styles.desc)}>This is modal is Modal!</p>
                       </div>
                   </Modal>
               )}
           </div>
       );
}

export default ModalDemo;