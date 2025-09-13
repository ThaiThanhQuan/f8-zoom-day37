import { useState } from "react";
import clsx from "clsx";
import {Bell } from "lucide-react";

import styles from './Notification.module.scss'
import defaultAvatar from '../../../../assets/images/default_avatar.webp'


function Notification() {
    const [isOpen, setIsOpen] = useState(false)

    const notifications = [
        {
            id: 1,
            type: "course",
            title: "Bạn đã hoàn thành bài học mới: Vòng lặp trong JavaScript",
            time: "5 phút trước",
            avatar: defaultAvatar,
        },
        {
            id: 2,
            type: "system",
            title: "Cập nhật bài mới trong khóa học NodeJS & Express",
            time: "30 phút trước",
            avatar: defaultAvatar,
        },
        {
            id: 3,
            type: "message",
            title: "Tin nhắn từ giảng viên: Hãy xem lại bài tập tuần 3 nhé!",
            time: "1 giờ trước",
            avatar: defaultAvatar,
        },
        {
            id: 4,
            type: "course",
            title: "Khóa học ReactJS có bài học mới: Hooks nâng cao và Context API",
            time: "2 giờ trước",
            avatar: defaultAvatar,
        },
        {
            id: 5,
            type: "system",
            title: "Khuyến mãi khóa học Frontend: Giảm 50% toàn bộ khóa học",
            time: "Hôm qua",
            avatar: defaultAvatar,
        }, 
        {
            id: 6,
            type: "system",
            title: "Thông báo backend update",
            time: "Hôm nay",
            avatar: defaultAvatar,
        }
        ];



    return ( 
        <div className={clsx(styles.wrapper)}>
            <button 
                className={clsx(styles.btn)}
                onClick={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                >
                <Bell className={clsx(styles.bell)}  size={20} />
            </button>
           {isOpen && <div className={clsx(styles.content)}>
                <div className={clsx(styles.contentheader)}>
                    <h6 className={clsx(styles.contenttitle)}>Thông báo</h6>
                    <a className={clsx(styles.cotentbtn)}>Đánh dấu đã đọc</a>
                </div>
                    {notifications.map(notification => (
                       <ul key={notification.id} className={clsx(styles.notificationitem)}>
                            <img className={clsx(styles.notificationavatar)} src={notification.avatar} />
                           <div className={clsx(styles.notificationinfo)}>
                                <p className={clsx(styles.notificationtitle)}>{notification.title}</p>
                                <p className={clsx(styles.notificationtime)}>{notification.time}</p>
                            </div>
                       </ul>
                    ))}
            </div>}
        </div>

     );
}

export default Notification;