import { useLayoutEffect, useEffect, useRef, useState } from "react";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListDescription from "./PlayListDescription";
import PlayListTitle from "./PlayListTitle";

const dataContextMenu = [
    {
        label: 'Add to Your Library'
    },
    {
        label: 'Share',
        subMenuItems: [
            {
                label: 'Copy link to playlist'
            },
            {
                label: 'Embed playlist'
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

function PlayList({ classesHiddenVisible, cover, title, description, toggleEnableScrolling }) {
    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false);
    const [positionContextMenu, setPositionContextMenu] = useState({x: null, y: null});

    const playListRef = useRef(null);
    const contextMenuRef = useRef(null);

    useLayoutEffect(
        () => {
            if(isOpenContextMenu) {
                contextMenuRef.current.style.left = `${positionContextMenu.x}px`;
                contextMenuRef.current.style.top = `${positionContextMenu.y}px`;
            }
            toggleEnableScrolling(!isOpenContextMenu);
        }
    )

    useEffect(() => {
        if (!isOpenContextMenu) return;

        const handlerCloseContextMenu = (event) => !contextMenuRef.current.contains(event.target) && closeContextMenu();
        const handlerEsc = (event) => event.keyCode === 27 && closeContextMenu();

        document.addEventListener('mousedown', handlerCloseContextMenu);
        document.addEventListener('keydown', handlerEsc);

        return () => {
            document.removeEventListener('mousedown', handlerCloseContextMenu);
            document.removeEventListener('keydown', handlerEsc);
        }
    })

    const openContextMenu = (event) => {
        event.preventDefault();
        setIsOpenContextMenu(true);
        console.log('contextmenu')
        
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

    return (
        <a href="/" 
            ref={playListRef}
            className={`relative cursor-default p-4 rounded-md hover:bg-[#272727] duration-200 group ${classesHiddenVisible} ${bgClasses}`}
            onContextMenu={openContextMenu}
            onClick={(event) => event.preventDefault()}
        >
            <div className="relative">
                <PlayListCover src={cover} />
                <PlayListButtonPlay />
            </div>

            <PlayListTitle title={title} />
            <PlayListDescription description={description} />

            {isOpenContextMenu && 
                <PlayListContextMenu 
                    ref={contextMenuRef}
                    dataContextMenu={dataContextMenu}
                />
            }
        </a>
    )
}

export default PlayList;