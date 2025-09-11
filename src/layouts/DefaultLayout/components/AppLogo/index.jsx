import { Link } from 'react-router';
import clsx from 'clsx';

import logo from '../../../../assets/images/f8-logo.png'
import styles from './AppLogo.module.scss'

function AppLogo() {
    return (    
        <Link className={clsx(styles.wrapper)} to="/">
            <img className={clsx(styles.img)} src={logo} alt='F8'/>
            <p className={clsx(styles.text)}>Học Lập Trình Để Đi Làm</p>
        </Link>
     );
}

export default AppLogo;