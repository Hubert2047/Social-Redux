import React from 'react'
import clsx from'clsx'
import styles from  './MarketPlace.module.scss'
import {sidebarMarketplaceCategoriesBtn,sidebarMarketplaceNavBtn} from '../../data/api'
import Products from '../../components/Products/Products';
import SideBarItem from '../../components/Sidebar/SidebarItem/SideBarItem';
import { AiFillSetting } from "react-icons/ai";
import SearchPrimary from '../../components/Search/SearchPrimary';

export default function MarketPlace() {
  return (
    <div className={styles.marketplace} >
       <div className={clsx('d-flex-r')}>
            <div className={styles.sidebar}>
                <div className={clsx(styles.header,'d-flex-c')}>
                      <div className={clsx(styles.headerTop,'d-flex-r')}>
                      <h2 className={styles.title}>MarketPlace</h2>
                      <AiFillSetting className={styles.headerIcon}/>
                      </div>
                      <SearchPrimary placeholder={'Search MarketPlace'}/>     
                </div>
                <ul className={styles.navBtns}>
                  {sidebarMarketplaceNavBtn.map(sidebarItem =>{
                    return <SideBarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
                  })}
                </ul>
                <div className={styles.filter}>
                    <h2 className={styles.filterHeading}>Filters</h2>
                    <a href="#" className={styles.currentFilterLocation}> New Taipei City</a>
                </div>
                <ul  >
                    <h2 className={styles.categoryHeading}>Categories</h2>

                    {sidebarMarketplaceCategoriesBtn.map(sidebarItem =>{
                      return <SideBarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
                    })}
                </ul>
            </div>

            <div className={styles.products}>
              <Products/>
            </div>
       </div>
    </div>
  )
}
