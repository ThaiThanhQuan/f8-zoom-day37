import clsx from "clsx";
import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";


import styles from './GoToTop.module.scss'
function GoToTop() {
    const [visible, setVisible] = useState(false)

    const handleScroll = () => {
        if(window.scrollY >= 300){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    useEffect(() => {
            window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return ( 
        <>
            {visible && 
                <button className={clsx(styles.btn)} onClick={scrollToTop}>
                    <ArrowUpToLine className={clsx(styles.scroll)} size={30} />
                </button>}
        </>
       
     );
}

export default GoToTop;