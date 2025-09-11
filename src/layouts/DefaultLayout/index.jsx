import { Outlet } from 'react-router';
import AppLogo from "./components/AppLogo";
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss'
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import MyCourses from './components/MyCourses';
import Notification from './components/Notification';
import UserMenu from './components/UserMenu';
function DefaultLayout() {
    return ( 
        <div className={clsx(styles.wrapper)}>
           <div className={clsx(styles.header)}>
                <AppLogo />
                <div className={clsx(styles.input)}><SearchForm /></div>
                <div className={clsx(styles.contentinformation)}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
                {/* <Header /> */}
           </div>
           <div className={clsx(styles.content)}>
                <Outlet />
            </div>
        </div>
     );
}

export default DefaultLayout;