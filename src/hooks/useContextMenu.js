import { useEffect, useRef, useState } from "react";
import useContextMenuPosition from "./useContextMenuPosition";

function useContextMenu () {
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);
    const [positionContextMenu, setPositionContextMenu] = useState({x: null, y: null});

    const playListRef = useRef(null);
    const contextMenuRef = useRef(null);

    const updateClickCoordinate = useContextMenuPosition(contextMenuRef, isOpenContextMenu, positionContextMenu);

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

        updateClickCoordinate(event.clientX, event.clientY);
        
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