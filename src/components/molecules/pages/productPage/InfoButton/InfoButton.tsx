import Button from '../../../../atoms/Button/Button';

import styles from '../InfoButton/InfoButton.module.scss';

interface InfoButtonProps{
    text:string
    isSelected:boolean
    changeFn:()=>void
}

const InfoButton:React.FC<InfoButtonProps> = ({text,isSelected, changeFn}) => {

    const classs = `defaultButtonStyle ButtonTransparent ${isSelected ? styles._selected :styles._notSelected}`

    return (
        <div className={styles.InfoButton} onClick={()=>changeFn()}>
            <Button type='button' className={classs} text={text} ariaLabel={text}/>
        </div>
    )
}

export default InfoButton;