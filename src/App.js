import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Registration from "./Registration";
import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";
import BaseToast from "./BaseToast";

function App() {
    const [toastMessage, setToastMessage] = useState();
    const showTimerToast = useRef();
    const toastRef = useRef();

    const contentWrapperScrollingRef = useRef(null);
    let isEnableScrolling = true;

    function toggleEnableScrolling (isEnable) {
        isEnableScrolling = isEnable;
    }

    function handleScrollingWrapper (event) {
        if(isEnableScrolling) return;

        event.preventDefault();
        event.stopPropagation();
    }

    useEffect(() => {
        const contentWrapper = contentWrapperScrollingRef.current;
        contentWrapper.addEventListener('wheel', handleScrollingWrapper);
        return () => contentWrapper.removeEventListener('wheel', handleScrollingWrapper);
    })

    function showToast(text) {
        clearTimeout(showTimerToast.current);
        setToastMessage(text);
        toastRef.current.show();
        showTimerToast.current = setTimeout(toastRef.current.hide, 3000); 
    }

    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <Sidebar />
                <SidebarOverlay />

                <div className="flex-1 overflow-auto" ref={contentWrapperScrollingRef}>
                    <Header />
                    <Main showToast={showToast} toggleEnableScrolling={toggleEnableScrolling} />
                </div>
            </div>

            <Registration />
            <BaseToast ref={toastRef}>{toastMessage}</BaseToast>
        </>
    );
}

export default App;
