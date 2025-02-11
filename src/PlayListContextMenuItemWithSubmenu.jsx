import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";
import { useRef } from "react";
import useSubmenu from "./hooks/useSubmenu";

function PlayListContextMenuItemWithSubmenu({ label, submenuItems, onMouseEnter: closePreviousSubmenuIfOpen }) {

    const ref = useRef(null);
    
    const submenu = useSubmenu(ref, submenuItems, closePreviousSubmenuIfOpen);

    const bgClass = submenu.isOpen ? 'bg-[#3e3e3e]' : 'hover:bg-[#3e3e3e]';

    const classesButton = `w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center gap-3 ${bgClass}`;

    return (
        <li 
            className='relative' 
            ref={ref} 
            onMouseEnter={submenu.open} 
        >
            <button 
                className={classesButton}
            >
                {label}
                <ChevronRightIcon className="size-5" />
            </button>
            {submenu.isOpen && 
                <PlayListContextMenu 
                    dataContextMenu={submenuItems} 
                    isSubMenu={true} 
                    menuPositionClasses={submenu.classesPosition}
                />
            }
        </li>
    )
}

export default PlayListContextMenuItemWithSubmenu;