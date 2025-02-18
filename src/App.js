import { useEffect, useRef } from "react";
import Header from "./Header";
import Main from "./Main";
import Registration from "./Registration";
import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";
import BaseToast from "./BaseToast";
import BasePopover from "./BasePopover";

function App() {
    const popoverRef = useRef();
    const toastRef = useRef();

    const contentWrapperScrollingRef = useRef();
    let isEnableScrolling = true;

    useEffect(() => {
        const contentWrapper = contentWrapperScrollingRef.current;
        contentWrapper.addEventListener('wheel', handleScrollingWrapper);
        return () => contentWrapper.removeEventListener('wheel', handleScrollingWrapper);
    })

    function toggleEnableScrolling(isEnable) {
        isEnableScrolling = isEnable;
    }

    function handleScrollingWrapper(event) {
        if (isEnableScrolling) return;

        event.preventDefault();
        event.stopPropagation();
    }

    function showToast(message) {
        toastRef.current.show(message);
    }

    function showPopover(title, description) {
        popoverRef.current.show(title, description);
    }

    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <Sidebar showPopover={showPopover} />
                <SidebarOverlay />

                <div className="flex-1 overflow-auto" ref={contentWrapperScrollingRef}>
                    <Header />
                    <Main showToast={showToast} showPopover={showPopover} toggleEnableScrolling={toggleEnableScrolling} />
                </div>
            </div>

            <Registration />

            <BaseToast ref={toastRef} />
            <BasePopover ref={popoverRef} />
        </>
    );
}

export default App;
