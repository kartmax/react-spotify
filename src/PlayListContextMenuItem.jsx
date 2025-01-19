import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import { useEffect, useRef, useState } from "react";

function PlayListContextMenuItem({label, subMenuItems}) {
    const [contextMenu, setContextMenu] = useState({
        isOpen: false,
        classesPosition: ''
    });
    const menuItemRef = useRef(null);

    let closeMenuTimer = null;

    const openMenu = () => {
        if(closeMenuTimer) {
            stopCloseMenuTimer();
            return;
        }

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
        closeMenuTimer = setTimeout(() => {
            closeMenu();
        }, 100);
    }

    useEffect(() => stopCloseMenuTimer);

    function stopCloseMenuTimer () {
        clearTimeout(closeMenuTimer);
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
        if(subMenuItems) {
            const heightWindow = window.innerHeight;
            const menuItem = menuItemRef.current;
            const heightInnerContextMenu = subMenuItems.length * menuItem.offsetHeight;
            const bottomPositionMenuItem = menuItem.getBoundingClientRect().bottom;
            const shouldMoveYPositionClassMenu = heightInnerContextMenu < heightWindow - bottomPositionMenuItem;
            return shouldMoveYPositionClassMenu ? 'top-0' : 'bottom-0';
        }
    }

    function getPositionClassesContextMenu() {
        return `${getXPositionClassContextMenu()} ${getYPositionClassContextMenu()}`;
    }

    const classesButton = subMenuItems 
        ? "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center gap-3"
        : "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default";

    return (
        <li className={subMenuItems && 'relative'} ref={menuItemRef} onMouseEnter={openMenu} onMouseLeave={startCloseMenuTimer}>
            <button className={classesButton}>
                {label}
                {subMenuItems && <ChevronRightIcon className="size-5" />}
            </button>
            {subMenuItems && contextMenu.isOpen && 
                <PlayListContextMenu 
                    dataContextMenu={subMenuItems} 
                    isSubMenu={true} 
                    menuPositionClasses={contextMenu.classesPosition}
                />
            }
        </li>
    )
}

export default PlayListContextMenuItem;