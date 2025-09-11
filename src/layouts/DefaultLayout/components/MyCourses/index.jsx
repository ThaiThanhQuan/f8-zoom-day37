import { useState } from "react";

import clsx from "clsx";
import styles from './MyCourses.module.scss'

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false)

    const courses = [
        {
            id: 1,
            title: "JavaScript Cơ bản",
            desc: "Học cú pháp, biến, hàm, vòng lặp trong JS",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
        },
        {
            id: 2,
            title: "JavaScript Nâng cao",
            desc: "Tìm hiểu closure, this, prototype, async",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png"
        },
        {
            id: 3,
            title: "ReactJS từ A-Z",
            desc: "Xây dựng ứng dụng web hiện đại với React",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/1.png"
        },
        {
            id: 4,
            title: "NodeJS & Express",
            desc: "Backend với NodeJS, Express, REST API",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/3.png"
        },
        {
            id: 5,
            title: "HTML & CSS",
            desc: "Thiết kế giao diện web cơ bản và nâng cao",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png"
        },
        {
            id: 6,
            title: "TypeScript",
            desc: "Bổ sung typing cho JavaScript, nâng cao code",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png"
        },
         {
            id: 7,
            title: "Java",
            desc: "Kiến thức cơ bản và nâng cao của Java",
            image: "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png"
        },
    ];

    return ( 
        <div className={clsx(styles.wrapper)}>
            <button className={clsx(styles.btn)} onClick={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                >Khóa học của tôi</button>
           {isOpen && 
           
               <div className={clsx(styles.dropdown)}>
                    <div className={clsx(styles.content)}>
                    <div className={clsx(styles.contentheader)}>
                        <h6 className={clsx(styles.contenttitle)}>Khóa học của tôi</h6>
                        <a className={clsx(styles.cotentbtn)}>Xem tất cả</a>
                    </div>
                        {courses.map(course => (
                           <ul key={course.id} className={clsx(styles.courseitem)}>
                                <img className={clsx(styles.courseimage)} src={course.image} />
                               <div className={clsx(styles.courseinfo)}>
                                    <h3 className={clsx(styles.coursetitle)}>{course.title}</h3>
                                    <p className={clsx(styles.coursedesc)}>{course.desc}</p>
                                    <div className={clsx(styles.progress)}></div>
                                </div>
                           </ul>
                        ))}
                    </div>
               </div>
            }
        </div>

     );
}

export default MyCourses;