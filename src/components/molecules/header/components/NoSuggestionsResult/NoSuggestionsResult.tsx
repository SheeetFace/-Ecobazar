import styles from '../NoSuggestionsResult/NoSuggestionsResult.module.scss';

interface NoSuggestionsResultProps{
    className:string
}

const NoSuggestionsResult:React.FC<NoSuggestionsResultProps> = ({className}) => {

    return (
        <div className={className}>
            <span className={styles.NoSuggestionsResult}>Nothing was found 😭</span>
        </div>
    )
}

export default NoSuggestionsResult;