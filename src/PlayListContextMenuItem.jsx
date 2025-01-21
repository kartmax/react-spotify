import { useRef } from "react";

function PlayListContextMenuItem({ label, onMouseEnter: closePreviousSubmenuIfOpen }) {
    const menuItemRef = useRef(null);

    const classesButton = "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default";

    return (
        <li ref={menuItemRef} onMouseEnter={() => closePreviousSubmenuIfOpen()}>
            <button className={classesButton}>
                {label}
            </button>
        </li>
    )
}

export default PlayListContextMenuItem;