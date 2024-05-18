import { NavLink } from 'react-router-dom';

import LabelBadge from '../../../atoms/LabelBadge/LabelBadge';

import styles from '../SuggestionSearchCard/SuggestionSearchCard.module.scss';

import type { ProductDataType } from '../../../../types/productDataTypes';

type SuggestionSearchCardProps = ProductDataType;

const SuggestionSearchCard:React.FC<SuggestionSearchCardProps> = (props) => {

    const  {name, src, currentCost, oldCost, sale, category}  = props 

    return (
        <NavLink to={`/shop/${name}`} state={{data:props}}>
                    
            <li className={styles.SuggestionSearchCard}>
                <div className={styles._container}>
                    <img src={src} alt={name}/>
                    <span className={styles._name}>{name}</span>

                    <span className={styles._currentCost}>${currentCost}</span>
                    {oldCost ? <span className={styles._oldCost}>${oldCost}</span>:null}

                    {sale ? <LabelBadge label={`${sale} sale`} className={styles._label}/>:null}

                </div>

                <span className={styles._category}>{category}</span>
            </li>

        </NavLink>
    )
}

export default SuggestionSearchCard;