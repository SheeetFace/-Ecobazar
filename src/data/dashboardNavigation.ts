import DashboardIcon from "../components/atoms/icon/navigate/DashboardIcon"
import OrderHistoryIcon from "../components/atoms/icon/navigate/OrderHistoryIcon"
import SettingsIcon from "../components/atoms/icon/navigate/SettingsIcon"
import LogOutIcon from "../components/atoms/icon/navigate/LogOutIcon"

export const dashboardNavigationData= [
    {
        icon: DashboardIcon,
        name: 'Dashboard',
        to:'/dashboard'
    },
    {
        icon:OrderHistoryIcon,
        name: 'Order History',
        to:'orderHistory'
    },
    {
        icon:SettingsIcon,
        name: 'Settings',
        to:'settings'
    },
    {
        icon:LogOutIcon,
        name: 'Log out',
        to:'logout'
    },
]