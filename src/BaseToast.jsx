import React, { useImperativeHandle, useRef, useState } from "react";

function BaseToast (_, ref) {
    const [message, setMessage] = useState();
    const [opacityClass, setOpacityClass] = useState('opacity-0');
    const showTimerToast = useRef();

    useImperativeHandle(ref, () => ({
        show: (message) => {
            clearTimeout(showTimerToast.current);
            setMessage(message);
            setOpacityClass('opacity-1');
            showTimerToast.current = setTimeout(() => setOpacityClass('opacity-0'), 3000); 
        }
    }))

    return (
        <div className={`max-w-[90vw] fixed left-1/2 -translate-x-1/2 z-30 bottom-24 bg-[#2e76d0] text-white text-center tracking-wide whitespace-nowrap rounded-lg py-3 px-8 pointer-events-none transition-opacity duration-300 ${opacityClass}`}>
            {message}
        </div>
    )
}

export default React.forwardRef(BaseToast);