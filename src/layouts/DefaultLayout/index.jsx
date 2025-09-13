import { NavLink, Outlet } from 'react-router';
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss'
import Header from './components/Header';

function DefaultLayout() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.content)}>
                
            <div className={clsx(styles.navitem)}>
                <NavLink className={clsx(styles.nav)} to="/profile">Profile</NavLink>
                <NavLink className={clsx(styles.nav)} to="/modal-demo">ModalDemo</NavLink>
                <NavLink className={clsx(styles.nav)} to="/scroll-demo">ScrollDemo</NavLink>
            </div>
            
            <div className={clsx(styles.text)}><Outlet /></div>

            </div>

        </div>
     );
}

export default DefaultLayout;