import { Outlet } from 'react-router';
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss'
import Header from './components/Header';

function DefaultLayout() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.content)}>
                <Outlet />
            </div>
        </div>
     );
}

export default DefaultLayout;