import { HomeIcon, MagnifyingGlassIcon, QueueListIcon, PlusCircleIcon, HeartIcon } from "@heroicons/react/24/outline";
import SidebarNavItem from "./SidebarNavItem";

const activeClassesNav = "flex items-center gap-2 text-white bg-[#282828] mx-2 px-4 py-2 rounded";
const notActiveClassesNav = "flex items-center gap-2 hover:text-white mx-2 px-4 py-2 rounded duration-200";

const dataNavItems = [
    {
        classes: activeClassesNav,
        icon: <HomeIcon className="size-6" />,
        label: 'Home'
    },
    {
        classes: notActiveClassesNav,
        icon: <MagnifyingGlassIcon className="size-6" />,
        label: 'Search'
    },
    {
        classes: notActiveClassesNav + ' mb-6',
        icon: <QueueListIcon className="size-6" />,
        label: 'Your Library'
    },
    {
        classes: notActiveClassesNav,
        icon: <PlusCircleIcon className="size-6" />,
        label: 'Create Playlist'
    },
    {
        classes: notActiveClassesNav,
        icon: <HeartIcon className="size-6" />,
        label: 'Liked Songs'
    },
];

function SidebarNav() {
    return (
        <nav className="flex flex-col gap-2">
            {dataNavItems.map(dataNavItem => 
                <SidebarNavItem key={dataNavItem.label} {...dataNavItem} />)}
        </nav>
    )
}

export default SidebarNav;