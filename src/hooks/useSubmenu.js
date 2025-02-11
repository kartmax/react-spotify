import { useEffect, useRef, useState } from "react";

function useSubmenu ( ref, submenuItems, closePreviousSubmenuIfOpen ) {
    const [state, setState] = useState({
        isOpen: false,
        classesPosition: ''
    });

    useEffect(() => stopCloseTimer);

    const closeTimer = useRef(null);

    function startCloseTimer() {
        closeTimer.current = setTimeout(() => {
            close();
        }, 100);
    }

    function stopCloseTimer () {
        clearTimeout(closeTimer.current);
    }

    const open = () => {
        closePreviousSubmenuIfOpen(startCloseTimer);

        setState({
            isOpen: true,
            classesPosition: getPositionClasses()
        });
    };

    const close = () => setState({
        isOpen: false, 
        classesPosition: ''
    });

    function getXPositionClass () {
        const menuItem = ref.current;
        const widthWindow = window.innerWidth;
        const widthItem = menuItem.offsetWidth;
        const rightPositionItem = menuItem.getBoundingClientRect().right;
        const shouldMovePositionClass = widthItem > widthWindow - rightPositionItem;
        return shouldMovePositionClass ? 'right-full' : 'left-full';
    }

    function getYPositionClass () {
        const heightWindow = window.innerHeight;
        const menuItem = ref.current;
        const heightInner = submenuItems.length * menuItem.offsetHeight;
        const bottomPositionItem = menuItem.getBoundingClientRect().bottom;
        const shouldMoveYPositionClass = heightInner < heightWindow - bottomPositionItem;
        return shouldMoveYPositionClass ? 'top-0' : 'bottom-0';
    }

    function getPositionClasses() {
        return `${getXPositionClass()} ${getYPositionClass()}`;
    }

    return { open, ...state }
}

export default useSubmenu;