import clsx from 'clsx';

import styles from './Header.module.scss'
import AppLogo from '../AppLogo'
import SearchForm from '../SearchForm'
import MyCourses from '../MyCourses';
import Notification from '../Notification';
import UserMenu from '../UserMenu';

function Header() {

    return ( 
        <div className={clsx(styles.header)}>
             <AppLogo />
            <div className={clsx(styles.input)}> <SearchForm /></div>
                <div className={clsx(styles.contentinformation)}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
        </div>
     );
}

export default Header;