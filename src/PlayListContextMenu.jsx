import React, { useRef } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ dataContextMenu, isSubMenu, menuPositionClasses }, ref) {
    const listClasses = isSubMenu
        ? `absolute bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl whitespace-nowrap ${menuPositionClasses}`
        : "absolute z-10 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl whitespace-nowrap divide-y divide-[#3e3e3e]";

    let closePreviousSubmenu = useRef(null);

    function closePreviousSubmenuIfOpen (closeSubmenu = null) {
        if(closePreviousSubmenu.current) closePreviousSubmenu.current();
        closePreviousSubmenu.current = closeSubmenu;
    }

    return (
        <ul className={listClasses} ref={ref}>
            {dataContextMenu.map(dataItem =>
                dataItem.subMenuItems
                    ? <PlayListContextMenuItemWithSubmenu 
                        key={dataItem.label} 
                        {...dataItem} 
                        onMouseEnter = {closePreviousSubmenuIfOpen}
                    />
                    : <PlayListContextMenuItem 
                        key={dataItem.label} 
                        {...dataItem} 
                        onMouseEnter = {closePreviousSubmenuIfOpen}
                    />
            )}
        </ul>
    )
}

export default React.forwardRef(PlayListContextMenu);