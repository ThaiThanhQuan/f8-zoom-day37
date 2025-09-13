import { useState } from "react";

import { Search, BookOpen, FileText, PlayCircle } from "lucide-react";
import clsx from "clsx";
import styles from './SearchForm.module.scss'

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [showSearchValue, setShowSearchValue] = useState(false)

     const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            setShowSearchValue(true)
        }
    };

    const courses = [
        {id: 1, title: "Khoa hoc Javascript co ban", desc: "Khoa hoc cho nguoi moi bat dau"},
        {id: 2, title: "Khoa hoc Javascript nang cao", desc: "Hieu sau ve JS hien dai"},
        {id: 3, title: "ES6+ va ung dung", desc: "Tim hieu ve ES6+ va cach hoat dong"},
    ]

    const articles = [
        {id: 1, title: "Callback?", desc: "Hieu va van dung callback"},
        {id: 2, title: "HTML DOM là gì?", desc: "Ly giai HTML DOM trong js"},
        {id: 3, title: "DOM attribute", desc: "Nhung thuoc tinh cua HTML DOM"},
    ]

    const videos = [
        {id: 1, title: "JS co ban trong 1 gio", desc: "Video hoc nhanh"},
        {id: 2, title: "HTML DOM", desc: "Thao tac DOM voi JS"},
    ]

    

    return ( 
       <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.searchinput)}>
                    <Search size={20} className={clsx(styles.icon)} />
                    <input 
                        type="text"
                        placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                        className={clsx(styles.input)}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setIsOpen(false)}
                    > 
                    </input>

                {isOpen && <div className={clsx(styles.dropdown)}>
                    {showSearchValue && <div className={clsx(styles.text)}>
                        <Search size={15} className={clsx(styles.texticon)} />
                        <p>Kết quả cho {`'${searchValue}'`}</p>
                    </div>}
                {/* Khóa học */}
                <div className={clsx(styles.section)}>
                    <div className={clsx(styles.sectionheader)}>
                        <h4 className={clsx(styles.sectiontitle)}>KHÓA HỌC</h4>
                        <a className={clsx(styles.btn)}>Xem thêm</a>
                    </div>
                    {courses.map(course => (
                        <div key={course.id}>
                            <div className={clsx(styles.searchitem)}>
                                <BookOpen className={clsx(styles.sectionicon)} color = "currentColor" size={18} />
                                <p className={clsx(styles.title)}>{course.title}</p>
                            </div>
                                <p className={clsx(styles.desc)}>{course.desc}</p>
                        </div>
                    ))}
                </div>
    
                {/* Bài viết */}
                <div className={clsx(styles.section)}>
                    <div className={clsx(styles.sectionheader)}>
                        <h4 className={clsx(styles.sectiontitle)}>BÀI VIẾT</h4>
                        <a className={clsx(styles.btn)}>Xem thêm</a>
                    </div>
                    {articles.map(article => (
                        <div key={article.id}>
                            <div className={clsx(styles.searchitem)}>
                                <FileText className={clsx(styles.sectionicon)} color = "currentColor" size={18} />
                                <p className={clsx(styles.title)}>{article.title}</p>
                            </div>
                                <p className={clsx(styles.desc)}>{article.desc}</p>
                        </div>
                    ))}
                </div>
    
                {/* Video */}
                <div className={clsx(styles.section)}>
                   <div className={clsx(styles.sectionheader)}>
                        <h4 className={clsx(styles.sectiontitle)}>VIDEO</h4>
                        <a className={clsx(styles.btn)}>Xem thêm</a>
                    </div>
                    {videos.map(video => (
                        <div key={video.id}>
                            <div className={clsx(styles.searchitem)}>
                                <PlayCircle className={clsx(styles.sectionicon)} color = "currentColor" size={18} />
                                <p className={clsx(styles.title)}>{video.title}</p>
                            </div>
                                <p className={clsx(styles.desc)}>{video.desc}</p>
                        </div>
                    ))}
                </div>
        </div>}
                </div>
            </div>
     );
}

export default SearchForm;