import OwnerIcon from '../../icon/info/OwnerIcon';

import styles from '../Owner/Owner.module.scss';

interface OwnerProps{
    owner:string
}

const Owner:React.FC<OwnerProps> = ({owner}) => {

    return (
        <div className={styles.Owner}>
            <OwnerIcon className=''/>
            <span>By {owner}</span>
        </div>
    )
}

export default Owner;