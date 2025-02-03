import { useLayoutEffect, useEffect, useRef, useState } from "react";

function generationContextMenuItems (isAltLabel = false) {
    return [
        {
            label: 'Add to Your Library',
        },
        {
            label: 'Share',
            subMenuItems: [
                {
                    label: isAltLabel ? 'Copy Spotify URI' : 'Copy link to playlist',
                    classes: 'min-w-[165px]'
                },
                {
                    label: 'Embed playlist'
                },
                {
                    label: 'Copy link to playlist 1',
                    classes: 'min-w-[165px]'
                },
                {
                    label: 'Embed playlist 1'
                },
                {
                    label: 'Copy link to playlist 2',
                    classes: 'min-w-[165px]'
                },
                {
                    label: 'Embed playlist 2'
                }
            ]
        },
        {
            label: 'About recommendations'
        },
        {
            label: 'Open in Desktop App'
        },
    ];
}

const clickPosition = {};

function useContextMenu (toggleEnableScrolling) {
    const [contextMenuItems, setContextMenuItems] = useState(generationContextMenuItems());
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
        toggleEnableScrolling(!isOpenContextMenu);
    }

    useLayoutEffect(
        () => updateCoordinateContextMenu()
    )

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

    useEffect(() => {
        function handelAltKeyDown ({ key }) {
            if(key === 'Alt' && isOpenContextMenu) setContextMenuItems(generationContextMenuItems(true));
        }
    
        function handelAltKeyUp ({ key }) {
            if(key === 'Alt' && isOpenContextMenu) setContextMenuItems(generationContextMenuItems());
        }
    
        document.addEventListener('keydown', handelAltKeyDown);
        document.addEventListener('keyup', handelAltKeyUp);

        return () => {
            document.removeEventListener('keydown', handelAltKeyDown);
            document.removeEventListener('keyup', handelAltKeyUp);
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

    const bgClasses = isOpenContextMenu
        ? 'bg-[#272727]'
        : 'bg-[#181818]';

    return {
        playListRef,
        bgClasses,
        openContextMenu,
        isOpenContextMenu,
        contextMenuRef,
        contextMenuItems 
    }
}

export default useContextMenu;