import React, { useImperativeHandle, useState } from "react";

function BaseToast ({ children: message }, ref) {
    const [opacityClass, setOpacityClass] = useState('opacity-0');

    useImperativeHandle(ref, () => {
        return {
            show: () => setOpacityClass('opacity-1'),
            hide: () => setOpacityClass('opacity-0')
        }
    })

    return (
        <div className={`max-w-[90vw] fixed left-1/2 -translate-x-1/2 z-30 bottom-24 bg-[#2e76d0] text-white text-center tracking-wide whitespace-nowrap rounded-lg py-3 px-8 pointer-events-none transition-opacity duration-300 ${opacityClass}`}>
            {message}
        </div>
    )
}

export default React.forwardRef(BaseToast);