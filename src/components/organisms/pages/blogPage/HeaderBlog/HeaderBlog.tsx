
import { useAppSelector } from "../../../../../store/store";

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderBlog:React.FC = () => {
    
    const filter =  useAppSelector((state)=>state.blogFilter)

    return( <HeaderFilterPage filter={filter}/>)
}

export default HeaderBlog;