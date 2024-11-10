import { ChevronRightIcon } from "@heroicons/react/24/outline";

function PlayListButtonPlay() {
    return (
        <button className="size-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 duration-200">
            <ChevronRightIcon className="size-5" />
        </button>
    )
}

export default PlayListButtonPlay;