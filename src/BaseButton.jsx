function BaseButton ({ primary, clasess, children: label }) {
    const typeClass = primary
        ? 'bg-white text-[#2e2e2e]  px-[16px] sm:px-[38px] sm:py-[16px] rounded-full'
        : 'text-[#969696] text-white px-[12px] sm:px-[25px] hover:text-white';

    return (
        <a 
            href="/" 
            className={`inline-block text-sm sm:text-[16px] font-semibold leading-4 tracking-widest py-[10px] hover:scale-105 duration-200 ${typeClass} ${clasess}`}>
                {label}
        </a>
    )
}

export default BaseButton;