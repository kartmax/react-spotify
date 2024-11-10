import { useEffect, useRef } from "react";
import Header from "./Header";
import Main from "./Main";
import Registration from "./Registration";
import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";

function App() {

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


    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <Sidebar />
                <SidebarOverlay />

                <div className="flex-1 overflow-auto" ref={contentWrapperScrollingRef}>
                    <Header />
                    <Main toggleEnableScrolling={toggleEnableScrolling} />
                </div>
            </div>

            <Registration />
        </>
    );
}

export default App;
