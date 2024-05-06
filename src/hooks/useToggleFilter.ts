import { useState } from "react";

import styles from '../components/organisms/pages/styles/styles.module.scss';

type UseToggleFilterReturnType = [string, string, ()=> void];

const useToggleFilter = (initStyles:string):UseToggleFilterReturnType => {

    const [isClick, setIsClick] =useState<boolean>(true);

    const toggle = ()=>{
        setIsClick(isClick => !isClick)
    }

    const arrowClass = isClick ? styles._defaultArrow :  styles._rotateArrow;
    const bodyClass = `${initStyles} ${ isClick ? styles._appear : styles._disappear}`;

    return [arrowClass, bodyClass, toggle];

}

export default useToggleFilter;