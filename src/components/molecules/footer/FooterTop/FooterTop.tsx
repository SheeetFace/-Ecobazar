import BrandInfo from '../../BrandInfo/BrandInfo';

import {MyAccountData} from '../../../../data/footerNavigation';

import styles from '../FooterTop/FooterTop.module.scss';

interface NavigationDataItem{
    name: string,
    path: string,
}

const FooterTop:React.FC = ()=>{

    const renderNavigationList = (data:NavigationDataItem[])=>{
        return data.map((item,i)=>{
            return(
                <span className={i===0 ? styles._title:styles._name}>
                    {item.name}
                </span>
            )
        })

    }

    return(
        <div className={styles.FooterTop}>
            <BrandInfo/>

            <div className={styles._list}>
                {renderNavigationList(MyAccountData)}
            </div>
        </div>
    )
}
export default FooterTop;