import React from "react";
import PlayListContextMenuItem from "./PlayListContextMenuItem";

function PlayListContextMenu({ dataContextMenu, isSubMenu }, ref) {
    const listClasses = isSubMenu
        ? "absolute left-full top-0 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl whitespace-nowrap invisible peer-hover:visible hover:visible"
        : "absolute z-10 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl whitespace-nowrap divide-y divide-[#3e3e3e]";

    return (
        <ul className={listClasses} ref={ref}>
            {dataContextMenu.map(dataItem =>
                <PlayListContextMenuItem key={dataItem.label} {...dataItem} />
            )}
        </ul>
    )
}

export default React.forwardRef(PlayListContextMenu);