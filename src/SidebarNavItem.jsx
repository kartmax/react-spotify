function SidebarNavItem({ classes, icon, label, onClick }) {

    function handleClick (event) {
        if(!onClick) return;

        event.preventDefault();
        onClick();
    }

    return (
        <a href="/" className={classes} onClick={handleClick}>
            {icon}
            <span className="text-sm font-semibold">{label}</span>
        </a>
    )
}

export default SidebarNavItem;