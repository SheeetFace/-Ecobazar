import Divider from '../../../../atoms/Divider/Divider';
import SocialMediaIcons from '../../../../molecules/SocialMediaIcons/SocialMediaIcons';
import WishlistCard from '../../../../molecules/card/WishlistCard/WishlistCard';

import { popularProductsData } from '../../../../../data/temp/popularProductsData';

import styles from '../Wishlist/Wishlist.module.scss';

const Wishlist:React.FC = () => {

    const renderWishlistCard = ()=>{
        const length = popularProductsData.length;

        return popularProductsData.map((item,i)=>{
            return(
                <WishlistCard
                name={item.name}
                id={item.id}
                src={item.src}
                currentCost={item.currentCost}
                oldCost={item.oldCost}
                stockStatus={item.stockStatus}
                key={i}
                isLast={length ===i}
                />
            )
        })
    }

    return (
        <div className={styles.Wishlist}>
            <div className={styles._header}>

                <div className={styles._product}>
                    <span>PRODUCT</span>
                </div>
                <div className={styles._cost}>
                    <span>PRICE</span>
                </div>
                <div className={styles._status}>
                    <span>STOCK STATUS</span>
                </div>
                <div className={styles._empty}>
                    <span>&nbsp;</span>
                </div>
               
            </div>
            <Divider type='horizontal' className={styles._divider}/>
                <div className={styles._cardContainer}>
                    {renderWishlistCard()}
                </div>
                
            <Divider type='horizontal' className={styles._divider}/>
            <div className={styles._share}>
                <span>Share:</span>
                <SocialMediaIcons/>
            </div>
        </div>
    )
}

export default Wishlist;