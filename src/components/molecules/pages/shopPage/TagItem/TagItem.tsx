import styles from '../TagItem/TagItem.module.scss';

interface TagItemProps{
    tag:string,
    chooseItem:number|null
    i:number
    fn:()=>void
}

const TagItem:React.FC<TagItemProps> = ({tag,chooseItem,fn,i}) => {

    const classs = chooseItem ===i ? styles.TagItemChoose: styles.TagItem

    return (
        <div className={classs} onClick={()=>fn()}>
            <span>{tag}</span>
        </div>
    )
}

export default TagItem;