import styles from '../ItemCountBadge/ItemCountBadge.module.scss'

interface ItemCountBadgeProps{
    count:number
}

const ItemCountBadge:React.FC<ItemCountBadgeProps> =({count})=>{

    return(
        <div className={styles.ItemCountBadge}>
            <span>{count >9 ? '+9' : count}</span>
        </div>
    )
}
export default ItemCountBadge;