import { NavLink } from 'react-router-dom'

import styles from '../NavigationList/NavigationList.module.scss'


interface NavigationListProps{
    title:string
    data:NavigationListDataItem[]
}

interface NavigationListDataItem{
    name: string,
    path: string,
}


const NavigationList:React.FC<NavigationListProps>=({data,title})=>{

    const renderNavigationList = (data:NavigationListDataItem[])=>{
        return data.map((item,i)=>{
            return(
                <li key={i}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                </li>
            )
        })
    }

    return(
        <div className={styles._list}>
            <h4>{title}</h4>

            <ul>{renderNavigationList(data)}</ul>
        </div>
    )
}
export default NavigationList;