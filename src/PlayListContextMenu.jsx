import React, { useRef } from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";
import PlayListContextMenuItemWithSubmenu from "./PlayListContextMenuItemWithSubmenu";

function PlayListContextMenu({ dataContextMenu, isSubMenu, menuPositionClasses }, ref) {
    const listClasses = isSubMenu ? menuPositionClasses : "z-10 divide-y divide-[#3e3e3e]";

    let closePreviousSubmenu = useRef(null);

    function closePreviousSubmenuIfOpen (closeSubmenu = null) {
        if(closePreviousSubmenu.current) closePreviousSubmenu.current();
        closePreviousSubmenu.current = closeSubmenu;
    }

    return (
        <ul className={`absolute bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-3xl whitespace-nowrap ${listClasses}`} ref={ref}>
            {dataContextMenu.map(dataItem =>
                dataItem.submenuItems
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