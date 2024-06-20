import { useAppSelector } from "../../../../../store/store";

import HeaderFilterPage from "../../components/HeaderFilterPage/HeaderFilterPage";

const HeaderShop:React.FC = () => {

    const filter = useAppSelector((state)=> state.productFilter)

    return(<HeaderFilterPage filter={filter}/>)
}

export default HeaderShop;