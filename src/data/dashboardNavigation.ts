import WishlistIcon from "../components/atoms/icon/navigate/WishlistIcon"
import CartIcon from "../components/atoms/icon/navigate/CartIcon"

export const dashboardNavigationData= [
    {
        icon: WishlistIcon,
        name: 'Dashboard',
        to:'dashboard'
    },
    {
        icon:WishlistIcon,
        name: 'Order History',
        to:'orderHistory'
    },
    {
        icon:WishlistIcon,
        name: 'Wishlist',
        to:'/wishlist'
    },
    {
        icon:CartIcon,
        name: 'Shopping Cart',
        to:'/shoppingcart'
    },
    {
        icon:WishlistIcon,
        name: 'Settings',
        to:'settings'
    },
    {
        icon:WishlistIcon,
        name: 'Log out',
        to:'logout'
    },
]