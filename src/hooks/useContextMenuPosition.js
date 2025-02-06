import { useLayoutEffect } from "react";

const clickPosition = {};

function useContextMenuPosition(ref, isOpen, positionCoordinates) {
    useLayoutEffect(() => updateCoordinate());

    function updateCoordinate() {
        if (isOpen) {
            updateHorizontalPosition();
            updateVerticalPosition();
        }
    }

    function updateHorizontalPosition() {
        const x = positionCoordinates.x;
        const menuWidth = ref.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

        ref.current.style.left = `${shouldMoveLeft ? x - menuWidth : x }px`;
    }

    function updateVerticalPosition() {
        const y = positionCoordinates.y;
        const menuHeight = ref.current.offsetHeight;
        const shouldMoveTop = menuHeight > window.innerHeight - clickPosition.y;

        ref.current.style.top = `${shouldMoveTop ? y - menuHeight : y }px`;
    }

    function updateClickCoordinates(x, y) {
        clickPosition.x = x;
        clickPosition.y = y;
    }

    return updateClickCoordinates;
}

export default useContextMenuPosition;