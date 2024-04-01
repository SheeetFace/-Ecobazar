import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';
import ButtonWishlist from '../components/ButtonWishlist/ButtonWishlist';
import Button from '../../../atoms/Button/Button';
import ButtonQuickView from '../components/ButtonQuickView/ButtonQuickView';
import RatingStars from '../../RatingStars/RatingStars';
import Timer from '../../mainPage/Timer/Timer';

import CartIcon from '../../../atoms/icon/navigate/CartIcon';

import styles from '../BigProductCard/BigProductCard.module.scss';

interface BigProductCardProps{
    name:string,
    id:string,
    src:string,
    currentCost:string,
    oldCost:string,
    sale:string,
    rating:string,
}

const BigProductCard:React.FC<BigProductCardProps> = ({name,id,src,currentCost,oldCost,sale,rating}) => {

    return (
        <div className={styles.BigProductCard}>
            <div className={styles._img}>
                <div className={styles._wrapperLabels}>
                    <LabelBadge label='Best Sale' className={styles._bestSale}/>
                    <LabelBadge label={`Sale${sale}`} className={styles._saleDiscount}/>
                </div>
                <img alt={name} src={src}/>
            </div>

            <div className={styles._buttonsWrapper}>
                <ButtonWishlist id={id} type='card'/>
                <Button className='ButtonFilledOval fillGreen colorTextGrey1 buttonMaxWidth' type='button' text=' Add to Cart' icon ={<CartIcon className={styles._icon}/>}/>
                <ButtonQuickView id={id}/>
            </div>

            <div className={styles._wrapperInfo}>
                <span className={styles._name}>{name}</span>
                <div className={styles._cost}>
                    <span>{currentCost}</span>
                    <span className={styles._old}>{oldCost}</span>
                </div>
                
                <RatingStars rating={+rating} type='big'/>
            </div>
            <div className='center'>
                <span className={styles._hurryUp}>Hurry up! Offer ends In:</span>
                <Timer color='black'/>
            </div>
        </div>
    )
}

export default BigProductCard;