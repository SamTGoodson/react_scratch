import React from 'react';
import RenderBusiness from './business';
import styles from './bislist.module.css';

const BusinessList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}><RenderBusiness /></div>
                <div className={styles.col}><RenderBusiness /></div>
                <div className={styles.col}><RenderBusiness /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}><RenderBusiness /></div>
                <div className={styles.col}><RenderBusiness /></div>
                <div className={styles.col}><RenderBusiness /></div>
            </div>
        </div>
    );
}

export default BusinessList;

