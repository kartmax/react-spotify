import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import BaseButton from "./BaseButton";

const hiddenClasses = 'opacity-0 translate-x-2 pointer-events-none';

function BasePopover (_, ref) {
    const [classes, setClasses] = useState(hiddenClasses);
    const [text, setText] = useState({});
    const nodeRef = useRef();

    useImperativeHandle(ref, () => ({
        show
    }));

    useEffect(() => {
        function handleClickAway({ target }) {
            if(!nodeRef.current.contains(target)) hide();
        }

        document.addEventListener('mousedown', handleClickAway);

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        }
    });

    function show (title, description, target) {
        moveTo(target);
        setText({...text, title, description});
        setClasses('');
    }
    
    function hide () {
        setClasses(hiddenClasses);
    }
    
    function moveTo(target) {
        const { top, right, height } = target.getBoundingClientRect();
        nodeRef.current.style.top = `${top - height/2}px`;
        nodeRef.current.style.left = `${right + 30}px`;
    }

    return (
        <div ref={nodeRef} className={`fixed z-40 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 min-w-[330px] select-none transition duration-400s ${classes}`}>
            <h3 className="text-lg font-bold mb-2">{text.title}</h3>
            <p className="text-xs">{text.description}</p>

            <div className="mt-6 text-right text-white">
                <BaseButton onClick={hide}>Not now</BaseButton>
                <BaseButton primary>Login</BaseButton>
            </div>

            <div className="absolute w-10 h-10 -left-10 top-0 flex justify-end items-center overflow-hidden pointer-events-none">
                <div className="w-3 h-3 bg-[#0e72ea] shadow-3xl rotate-45 translate-x-1/2 pointer-events-auto"></div>
            </div>
        </div>
    ) 
}

export default React.forwardRef(BasePopover);