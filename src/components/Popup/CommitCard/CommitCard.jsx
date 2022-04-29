import React from 'react'
import styles from './CommitCard.module.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import clsx from 'clsx'
export default function CommitCard({
    handleShowAlert,
    handleAlertActions,
    title,
    messenger,
}) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
            }}
            className={styles.commitCard}>
            <div className={styles.title}>
                {title}
                <AiOutlineCloseCircle
                    onClick={handleShowAlert}
                    className={styles.icon}
                />
            </div>
            <div className={styles.messenger}>{messenger}</div>
            <div className={styles.actionBtns}>
                <button
                    onClick={handleShowAlert}
                    className={clsx(
                        'btn',
                        styles.actionBtn,
                        styles.actionBtn,
                        styles.white
                    )}>
                    No
                </button>
                <button
                    onClick={handleAlertActions}
                    className={clsx('btn', styles.actionBtn, styles.blue)}>
                    Delete
                </button>
            </div>
        </div>
    )
}
