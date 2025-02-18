import { useRef } from "react";

function SidebarNavItem({ classes, icon, label, onClick }) {
    const labelRef = useRef();

    function handleClick (event) {
        if(!onClick) return;

        event.preventDefault();
        onClick(labelRef.current);
    }

    return (
        <a href="/" className={classes} onClick={handleClick}>
            {icon}
            <span ref={labelRef} className="text-sm font-semibold">{label}</span>
        </a>
    )
}

export default SidebarNavItem;