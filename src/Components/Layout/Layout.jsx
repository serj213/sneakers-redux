import React from "react";
import styles from './Layout.module.scss';




const Layout = ({ children }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

export default Layout;