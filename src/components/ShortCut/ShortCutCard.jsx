import clsx from 'clsx'
import React from 'react'
import styles from  './ShortCutCard.module.scss'

export default function ShortCut({avatar,name}) {
  return (
        <div className={clsx(styles.shortCutCard,'d-flex-r')}>
                    <img src={avatar} alt="shortcut Avatar" className={styles.img}/>
                    <p className={styles.name}>{name}</p>
        </div>
  )
}
