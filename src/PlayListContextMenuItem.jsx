import { useEffect, useRef, useState } from "react";

function PlayListContextMenuItem({ label: originalLabel, altLabel, classes, onMouseEnter: closePreviousSubmenuIfOpen }) {
    const menuItemRef = useRef(null);

    const classesButton = `w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default ${classes}`;

    const [label, setLabel] = useState(originalLabel);

    useEffect(() => {
        if(!altLabel) return;

        function handelAltKeyDown ({ key }) {
            if(key === 'Alt') setLabel(altLabel);
        }
    
        function handelAltKeyUp ({ key }) {
            if(key === 'Alt') setLabel(originalLabel);
        }
    
        document.addEventListener('keydown', handelAltKeyDown);
        document.addEventListener('keyup', handelAltKeyUp);

        return () => {
            document.removeEventListener('keydown', handelAltKeyDown);
            document.removeEventListener('keyup', handelAltKeyUp);
        }
    });


    return (
        <li ref={menuItemRef} onMouseEnter={() => closePreviousSubmenuIfOpen()}>
            <button className={classesButton}>
                {label}
            </button>
        </li>
    )
}

export default PlayListContextMenuItem;