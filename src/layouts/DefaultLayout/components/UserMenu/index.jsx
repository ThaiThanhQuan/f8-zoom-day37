import { useState } from "react";

import clsx from "clsx";
import styles from './UserMenu.module.scss'

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
       <div className={clsx(styles.wrapper)}>
            <div 
                tabIndex={0}
                onClick={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}    
            >
                <img className={clsx(styles.img)} src="https://files.fullstack.edu.vn/f8-prod/user_photos/365142/65254ece15fed.jpg"/>
           
                {isOpen && <div className={clsx(styles.user)}>
                <div className={clsx(styles.userheader)}>
                    <img className={clsx(styles.useravatar)} src="https://files.fullstack.edu.vn/f8-prod/user_photos/365142/65254ece15fed.jpg"/>
                    <div className={clsx(styles.userinfo)}>
                        <p className={clsx(styles.username)}>Quân Thái</p>
                        <p className={clsx(styles.usermail)}>@thaiquan1</p>
                    </div>
                </div>
                       <div className={clsx(styles.menusection)}>
                            <p className={clsx(styles.menuitem)}>Trang cá nhân</p>
                        </div>

                        <div className={clsx(styles.menusection)}>
                            <p className={clsx(styles.menuitem)}>Viết blog</p>
                            <p className={clsx(styles.menuitem)}>Bài viết của tôi</p>
                            <p className={clsx(styles.menuitem)}>Bài viết đã lưu</p>
                        </div>

                        <div className={clsx(styles.menuSection, styles.noborder)}>
                            <p className={clsx(styles.menuitem)}>Cài đặt</p>
                            <p className={clsx(styles.menuitem)}>Đăng xuất</p>
                        </div>

            </div>
        }   
         </div>
            
            
    
    
       </div>

     );
}

export default UserMenu;