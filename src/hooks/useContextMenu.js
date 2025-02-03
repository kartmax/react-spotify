import { useLayoutEffect, useEffect, useRef, useState } from "react";

const clickPosition = {};

function useContextMenu () {
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);
    const [positionContextMenu, setPositionContextMenu] = useState({x: null, y: null});

    const playListRef = useRef(null);
    const contextMenuRef = useRef(null);

    function updateHorizontalPositionContextMenu () {
        const menuWidth = contextMenuRef.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

        contextMenuRef.current.style.left = shouldMoveLeft
            ? `${positionContextMenu.x - menuWidth}px`
            : `${positionContextMenu.x}px`;
    }

    function updateVerticalPositionContextMenu () {
        const menuHeight = contextMenuRef.current.offsetHeight;
        const shouldMoveTop = menuHeight > window.innerHeight - clickPosition.y;

        contextMenuRef.current.style.top = shouldMoveTop
            ? `${positionContextMenu.y - menuHeight}px`
            : `${positionContextMenu.y}px`;
    }

    function updateCoordinateContextMenu () {
        if(isOpenContextMenu) {
            updateHorizontalPositionContextMenu();
            updateVerticalPositionContextMenu();
        }
    }

    useLayoutEffect( () => updateCoordinateContextMenu() );

    useEffect(() => {
        if (!isOpenContextMenu) return;

        const handlerCloseContextMenu = ({ target }) => !contextMenuRef.current.contains(target) && closeContextMenu();
        const handlerEsc = ({ key }) => key === 'Escape' && closeContextMenu();

        document.addEventListener('mousedown', handlerCloseContextMenu);
        document.addEventListener('keydown', handlerEsc);

        return () => {
            document.removeEventListener('mousedown', handlerCloseContextMenu);
            document.removeEventListener('keydown', handlerEsc);
        }
    });

    const openContextMenu = (event) => {
        event.preventDefault();
        setIsOpenContextMenu(true);

        clickPosition.x = event.clientX;
        clickPosition.y = event.clientY;
        
        setPositionContextMenu( 
            {
                x: event.clientX - playListRef.current.getBoundingClientRect().left, 
                y: event.clientY - playListRef.current.getBoundingClientRect().top
            }
        );
    }
    const closeContextMenu = () => setIsOpenContextMenu(false);

    return {
        playListRef,
        openContextMenu,
        isOpenContextMenu,
        contextMenuRef
    }
}

export default useContextMenu;