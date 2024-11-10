function SidebarOverlay() {
    return (
        <a href="#overlay" className="inline-block fixed inset-0 bg-black opacity-0 pointer-events-none z-30 peer-target:opacity-50 peer-target:pointer-events-auto md:hidden transition">&nbsp;</a>
    )
}

export default SidebarOverlay;