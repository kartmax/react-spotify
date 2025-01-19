import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

function Sidebar() {
    return (
        <aside id="sidebar" className="bg-black w-[256px] overflow-auto text-[#b2b2b2] flex flex-col fixed md:sticky top-0 z-40 h-dvh md:h-auto -translate-x-full target:translate-x-0 md:translate-x-0 transition-transform peer">
            <SidebarHeader />
            <SidebarNav />
            <SidebarFooter />
        </aside>
    )
}

export default Sidebar;