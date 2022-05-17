import React from "react";

import styles from './GridCartBox.module.scss';


const GridCartBox = ({children}) => {
    return(
       <div className={styles.cartBox}>
           {children}
       </div>
    )
}

export default GridCartBox