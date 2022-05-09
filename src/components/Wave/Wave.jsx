import clsx from 'clsx'
import React from 'react'
import styles from './Wave.module.scss'
export default function Wave() {
    return (
        <div className={clsx(styles.waves, 'd-flex-r')}>
            <div className={clsx(styles.wave, styles.wave1)}></div>
            <div className={clsx(styles.wave, styles.wave2)}></div>
            <div className={clsx(styles.wave, styles.wave3)}></div>
            <div className={clsx(styles.wave, styles.wave4)}></div>
            <div className={clsx(styles.wave, styles.wave5)}></div>
        </div>
    )
}
