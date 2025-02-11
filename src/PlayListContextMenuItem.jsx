import { useRef } from "react";

function PlayListContextMenuItem({ label, classes, onClick: handleClick, onMouseEnter: closePreviousSubmenuIfOpen }) {
    const menuItemRef = useRef(null);

    const classesButton = `w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default ${classes}`;

    return (
        <li ref={menuItemRef} onMouseEnter={() => closePreviousSubmenuIfOpen()}>
            <button 
                className={classesButton}
                onClick={handleClick}
            >
                {label}
            </button>
        </li>
    )
}

export default PlayListContextMenuItem;