import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlayListContextMenu from "./PlayListContextMenu";

function PlayListContextMenuItem({label, subMenuItems}) {
    const classesButton = subMenuItems 
        ? "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center gap-3 peer"
        : "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default";
    return (
        <li className={subMenuItems && 'relative'}>
            <button className={classesButton}>
                {label}
                {subMenuItems && <ChevronRightIcon className="size-5" />}
            </button>
            {subMenuItems && <PlayListContextMenu dataContextMenu={subMenuItems} isSubMenu={true} />}
        </li>
    )
}

export default PlayListContextMenuItem;