import DeliveryTruckIcon from "../components/atoms/icon/feature/DeliveryTruckIcon"
import HeadPhoneIcon from "../components/atoms/icon/feature/HeadPhoneIcon"
import ShoppingBagIcon from "../components/atoms/icon/feature/ShoppingBagIcon"
import PackageIcon from "../components/atoms/icon/feature/PackageIcon"
import LeafIcon from "../components/atoms/icon/feature/LeafIcon"
import StartIcon from "../components/atoms/icon/feature/StartIcon"

export const featureMainPageData = [
    {
        icon:DeliveryTruckIcon,
        title:'Free Shipping',
        description:'Free shipping on all your order'
    },
    {
        icon:HeadPhoneIcon,
        title:'Customer Support 24/7',
        description:'Instant access to Support'
    },
    {
        icon:ShoppingBagIcon,
        title:'100% Secure Payment',
        description:'We ensure your money is save'
    },
    {
        icon:PackageIcon,
        title:'Money-Back Guarantee',
        description:'30 Days Money-Back Guarantee'
    },
]

export const featureAboutPageData = [

    ...featureMainPageData,  
    {
        icon:LeafIcon,
        title:'100% Organic Food',
        description:'100% healthy & Fresh food'
    },
    {
        icon:StartIcon,
        title:'Customer Feedback',
        description:'Our happy customer'
    },
]