import styles from '../TagItem/TagItem.module.scss';

interface TagItemProps{
    tag:string,
    chooseItem:string
    fn:()=>void
}

const TagItem:React.FC<TagItemProps> = ({tag,chooseItem,fn}) => {

    const classs = chooseItem ===tag ? styles.TagItemChoose: styles.TagItem

    return (
        <div className={classs} onClick={()=>fn()}>
            <span>{tag}</span>
        </div>
    )
}

export default TagItem;