import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useContextMenu from "./hooks/useContextMenu";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListDescription from "./PlayListDescription";
import PlayListTitle from "./PlayListTitle";
import BaseToast from "./BaseToast";

function PlayList({ classesHiddenVisible, cover, title, description, toggleEnableScrolling }) {
    const [isToastShow, setIsToastShow] = useState(false);
    const [contextMenuItems, setContextMenuItems] = useState(generationContextMenuItems);
    const showTimerToast = useRef();

    function generationContextMenuItems (isAltLabel = false) {
        return [
            {
                label: 'Add to Your Library',
            },
            {
                label: 'Share',
                submenuItems: [
                    {
                        label: isAltLabel ? 'Copy Spotify URI' : 'Copy link to playlist',
                        classes: 'min-w-[165px]',
                        action: () => {
                            navigator.clipboard.writeText(title).then(() => {
                                closeMenu();
                                showToast();
                            });
                        } 
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

    const {
        playListRef,
        open: openMenu,
        close: closeMenu,
        isOpen: isOpenMenu,
        ref: menuRef
    } = useContextMenu();

    useEffect(() => {
        if (!isOpenMenu) return;

        function handelAltKeyDown ({ key }) {
            if(key === 'Alt') setContextMenuItems(generationContextMenuItems(true));
        }
    
        function handelAltKeyUp ({ key }) {
            if(key === 'Alt') setContextMenuItems(generationContextMenuItems());
        }
    
        document.addEventListener('keydown', handelAltKeyDown);
        document.addEventListener('keyup', handelAltKeyUp);

        return () => {
            document.removeEventListener('keydown', handelAltKeyDown);
            document.removeEventListener('keyup', handelAltKeyUp);
        }
    });

    useLayoutEffect( () => toggleEnableScrolling(!isOpenMenu) );

    const bgClasses = isOpenMenu
        ? 'bg-[#272727]'
        : 'bg-[#181818]';

    function showToast() {
        setIsToastShow(true);
        showTimerToast.current = setTimeout(hideToast, 3000); 
    }

    function hideToast() {
        setIsToastShow(false);
    }

    return (
        <>
        <a href="/"
            ref={playListRef}
            className={`relative cursor-default p-4 rounded-md hover:bg-[#272727] duration-200 group ${classesHiddenVisible} ${bgClasses}`}
            onContextMenu={openMenu}
            onClick={(event) => event.preventDefault()}
        >
            <div className="relative">
                <PlayListCover src={cover} />
                <PlayListButtonPlay />
            </div>

            <PlayListTitle title={title} />
            <PlayListDescription description={description} />

            {isOpenMenu &&
                <PlayListContextMenu
                    ref={menuRef}
                    dataContextMenu={contextMenuItems}
                />
            }
        </a>
        {isToastShow && <BaseToast>Link copied to clipboard</BaseToast>}
        </>
    )
}

export default PlayList;