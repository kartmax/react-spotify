import { Bars3Icon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ButtonSignUp from "./ButtonSignUp";
import ButtonLogin from "./ButtonLogin";

function Header() {
    return (
        <header className="bg-[#090909] flex items-center justify-between px-4 sm:px-8 py-4 sticky top-0 z-20">
            <div className="flex gap-2 sm:gap-4">
                <a href="#sidebar" className="text-[#969696] inline-block p-1 -ml-1.5 md:hidden">
                    <Bars3Icon className="size-6" />
                </a>
                <a href="/" className="text-[#969696] p-1 cursor-not-allowed">
                    <ChevronLeftIcon className="size-6" />
                </a>
                <a href="/" className="text-[#969696] p-1 cursor-not-allowed">
                    <ChevronRightIcon className="size-6" />
                </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
                <ButtonSignUp />
                <ButtonLogin />
            </div>
        </header>
    )
}

export default Header;