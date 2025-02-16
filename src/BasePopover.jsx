import ButtonLogin from "./ButtonLogin";
import ButtonSignUp from "./ButtonSignUp";

function BasePopover () {
    return (
        <div className="fixed top-[227px] left-[200px] z-40 bg-[#0e72ea] text-white tracking-wide rounded-lg shadow-3xl p-4 min-w-[330px] select-none">
            <h3 className="text-lg font-bold mb-2">Create a playlist</h3>
            <p className="text-xs">Log in to create and share playlist.</p>
            <div className="mt-6 text-right text-white">
                <ButtonSignUp />
                <ButtonLogin />
            </div>
            <div className="absolute w-20 h-20 -left-20 -top-4 flex justify-end items-center overflow-hidden pointer-events-none">
                <div className="w-3 h-3 bg-[#0e72ea] shadow-3xl rotate-45 translate-x-1/2 pointer-events-auto"></div>
            </div>
        </div>
    ) 
}

export default BasePopover;