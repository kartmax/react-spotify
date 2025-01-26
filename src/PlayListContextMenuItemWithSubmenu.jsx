import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import { useEffect, useRef, useState } from "react";

function PlayListContextMenuItemWithSubmenu({ label, subMenuItems, onMouseEnter: closePreviousSubmenuIfOpen }) {
    const [contextMenu, setContextMenu] = useState({
        isOpen: false,
        classesPosition: ''
    });
    const menuItemRef = useRef(null);
    
    const closeMenuTimer = useRef(null);

    const openMenu = () => {
        closePreviousSubmenuIfOpen(startCloseMenuTimer);

        setContextMenu({
            isOpen: true,
            classesPosition: getPositionClassesContextMenu()
        });
    };

    const closeMenu = () => setContextMenu({
        isOpen: false, 
        classesPosition: ''
    });

    function startCloseMenuTimer() {
        closeMenuTimer.current = setTimeout(() => {
            closeMenu();
        }, 100);
    }

    useEffect(() => stopCloseMenuTimer);

    function stopCloseMenuTimer () {
        clearTimeout(closeMenuTimer.current);
    }

    function getXPositionClassContextMenu () {
        const menuItem = menuItemRef.current;
        const widthWindow = window.innerWidth;
        const widthMenuItem = menuItem.offsetWidth;
        const rightPositionMenuItem = menuItem.getBoundingClientRect().right;
        const shouldMovePositionClassMenu = widthMenuItem > widthWindow - rightPositionMenuItem;
        return shouldMovePositionClassMenu ? 'right-full' : 'left-full';
    }

    function getYPositionClassContextMenu () {
        const heightWindow = window.innerHeight;
        const menuItem = menuItemRef.current;
        const heightInnerContextMenu = subMenuItems.length * menuItem.offsetHeight;
        const bottomPositionMenuItem = menuItem.getBoundingClientRect().bottom;
        const shouldMoveYPositionClassMenu = heightInnerContextMenu < heightWindow - bottomPositionMenuItem;
        return shouldMoveYPositionClassMenu ? 'top-0' : 'bottom-0';
    }

    function getPositionClassesContextMenu() {
        return `${getXPositionClassContextMenu()} ${getYPositionClassContextMenu()}`;
    }

    const classesButton = "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center gap-3";

    return (
        <li 
            className='relative' 
            ref={menuItemRef} 
            onMouseEnter={openMenu} 
        >
            <button className={classesButton}>
                {label}
                <ChevronRightIcon className="size-5" />
            </button>
            {contextMenu.isOpen && 
                <PlayListContextMenu 
                    dataContextMenu={subMenuItems} 
                    isSubMenu={true} 
                    menuPositionClasses={contextMenu.classesPosition}
                />
            }
        </li>
    )
}

export default PlayListContextMenuItemWithSubmenu;