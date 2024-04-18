import { useState } from "react";

import styles from '../components/organisms/pages/shopPage/styles/styles.module.scss'

const useToggleFilter = (initStyles:string) => {

    const [isClick, setIsClick] =useState<boolean>(true);

    const toggle = ()=>{
        setIsClick(isClick => !isClick)
    }

    const arrowClass = isClick ? styles._defaultArrow :  styles._rotateArrow;
    const bodyClass = `${initStyles} ${ isClick ? styles._appear : styles._disappear}`;

    return [arrowClass, bodyClass, toggle] as const;

}

export default useToggleFilter;