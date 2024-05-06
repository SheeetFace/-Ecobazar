import {  useContext } from 'react';
import { ProductFilterContext } from '../../../../../context/ProductFilterContext';

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderBlog:React.FC = () => {
    const {filter, changeFilter} = useContext(ProductFilterContext); //!TEMP CONTEXT

    return( <HeaderFilterPage filter={filter} changeFilter={changeFilter}/>)
}

export default HeaderBlog;