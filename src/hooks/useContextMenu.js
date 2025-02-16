import { useEffect, useRef, useState } from "react";
import useContextMenuPosition from "./useContextMenuPosition";

function useContextMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: null, y: null });

    const playListRef = useRef(null);
    const ref = useRef(null);

    const updateClickCoordinate = useContextMenuPosition(ref, isOpen, position);

    useEffect(() => {
        if (!isOpen) return;

        const handlerClose = ({ target }) => !ref.current.contains(target) && close();
        const handlerEsc = ({ key }) => key === 'Escape' && close();

        document.addEventListener('mousedown', handlerClose);
        document.addEventListener('keydown', handlerEsc);

        return () => {
            document.removeEventListener('mousedown', handlerClose);
            document.removeEventListener('keydown', handlerEsc);
        }
    });

    const open = (event) => {
        event.preventDefault();
        setIsOpen(true);

        updateClickCoordinate(event.clientX, event.clientY);

        setPosition(
            {
                x: event.clientX - playListRef.current.getBoundingClientRect().left,
                y: event.clientY - playListRef.current.getBoundingClientRect().top
            }
        );
    }
    const close = () => setIsOpen(false);

    return {
        playListRef,
        open,
        close,
        isOpen,
        ref
    }
}

export default useContextMenu;