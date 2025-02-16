function BaseToast ({ children: message }) {
    return (
        <div className="max-w-[90vw] fixed left-1/2 -translate-x-1/2 z-30 bottom-24 bg-[#2e76d0] text-white text-center tracking-wide whitespace-nowrap rounded-lg py-3 px-8 pointer-events-none">
            {message}
        </div>
    )
}

export default BaseToast;