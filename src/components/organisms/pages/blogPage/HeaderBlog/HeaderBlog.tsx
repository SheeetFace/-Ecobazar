import {  useContext } from 'react';

import { BlogFilterContext } from '../../../../../context/BlogFilterContext';

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderBlog:React.FC = () => {
    const {filter, changeFilter} = useContext(BlogFilterContext); 

    return( <HeaderFilterPage filter={filter} changeFilter={changeFilter}/>)
}

export default HeaderBlog;