function SidebarNavItem({classes, icon, label}) {
    return (
        <a href="/" className={classes}>
            {icon}
            <span className="text-sm font-semibold">{label}</span>
        </a>
    )
}

export default SidebarNavItem;