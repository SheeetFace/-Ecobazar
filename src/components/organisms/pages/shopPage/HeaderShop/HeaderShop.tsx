
import {  useContext } from 'react';
import { FilterContext } from '../../../../../context/FilterContext';

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderShop:React.FC = () => {

    const {filter, changeFilter} = useContext(FilterContext);

    return( <HeaderFilterPage filter={filter} changeFilter={changeFilter}/>)
}

export default HeaderShop;