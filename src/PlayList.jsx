import useContextMenu from "./hooks/useContextMenu";
import PlayListButtonPlay from "./PlayListButtonPlay";
import PlayListContextMenu from "./PlayListContextMenu";
import PlayListCover from "./PlayListCover";
import PlayListDescription from "./PlayListDescription";
import PlayListTitle from "./PlayListTitle";

function PlayList({ classesHiddenVisible, cover, title, description, toggleEnableScrolling }) {

    const {
        playListRef,
        bgClasses,
        openContextMenu,
        isOpenContextMenu,
        contextMenuRef,
        contextMenuItems 
    } = useContextMenu(toggleEnableScrolling);

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
                    dataContextMenu={contextMenuItems}
                />
            }
        </a>
    )
}

export default PlayList;