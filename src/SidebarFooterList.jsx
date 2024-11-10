import SidebarFooterItem from "./SidebarFooterItem";

function SidebarFooterList() {
    return (
        <ul>
            {['Cookies', 'Privacy'].map(label =>
                <SidebarFooterItem key={label} label={label} />
            )}
        </ul>
    )
}

export default SidebarFooterList;