import clsx from 'clsx';

import styles from './Header.module.scss'
import { NavLink } from 'react-router';

function Header() {

const items = [
    {title: "Home", to: '/'},
    {title: "Profile", to: '/profile'},
]

    return ( 
        <div className={clsx(styles.wrapper)}>
           <nav className={clsx(styles.content)}>
               {items.map(item => (
                    <NavLink className={clsx(styles.item)} to={item.to}>{item.title}</NavLink>
               ))}
           </nav>
        </div>
     );
}

export default Header;