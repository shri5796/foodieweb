import React from "react";
import styles from "./ContactNav.module.css";

export default function ContactNav() {
    return (
        <div className={styles.nav}>
            <ul className={styles.contact}>
                <li className={styles.item}>
                      <span>(+91) 98989890090</span>
                </li>
                <li className={styles.item}>
                 <span>abc@gmail.com</span>
                </li>
            </ul>
            <ul className={styles.social}>
                <li className={styles.item}>
                    
                </li>
                <li className={styles.item}>
                    
                </li>
                <li className={styles.item}>
                    
                </li>
            </ul>
        </div>
    );
}
