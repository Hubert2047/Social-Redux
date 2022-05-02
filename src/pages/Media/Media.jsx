import React from 'react'
import styles from './Media.module.scss'
export default function Media() {
    return (
        <div className={styles.media}>
            <input type='range' value={20} min={0} max={100} />
        </div>
    )
}
