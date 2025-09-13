import { useEffect, useState } from "react";
import clsx from "clsx";

import defaultAvatar from '../../assets/images/default_avatar.webp'
import styles from './Profile.module.scss'

function Profile() {
    const[previewUrl, setPreviewUrl] = useState(null)

         useEffect(() => {
            return () => {
                URL.revokeObjectURL(previewUrl);
            };
        }, [previewUrl]);

    const handleChange = (e) => {
        const image = e.target.files[0]
        const previewUrl = URL.createObjectURL(image)
        console.log(previewUrl)
        setPreviewUrl(previewUrl)
    }

    return ( 
        <label className={clsx(styles.wrapper)}>
            <input type="file" accept="image/*" hidden onChange={handleChange}/>
            <img className={clsx(styles.avatar)} src={previewUrl || defaultAvatar} alt="Default Layout"/>
        </label>
     );
}

export default Profile;