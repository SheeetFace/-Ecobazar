
import {  useContext } from 'react';
import { ProductFilterContext } from '../../../../../context/ProductFilterContext';

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderShop:React.FC = () => {

    const {filter, changeFilter} = useContext(ProductFilterContext);

    return( <HeaderFilterPage filter={filter} changeFilter={changeFilter}/>)
}

export default HeaderShop;