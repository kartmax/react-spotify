import PlayList from "./PlayList";

const playlists = [
    {
        classesHiddenVisible: '',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 1',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden sm:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 2',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden md:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 3',
        description: 'Lorem ipsum sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden lg:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 4',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden xl:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 5',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden 2xl:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 6',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden 3xl:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 7',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.'
    },
    {
        classesHiddenVisible: 'hidden 4xl:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 8',
        description: 'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor.'
    },
    {
        classesHiddenVisible: 'hidden 5xl:block',
        cover: 'https://fakeimg.pl/600/fff/000/?text=Cover&font=lobster',
        title: 'Playlist 9',
        description: 'Lorem ipsum dolor sit consectetur.'
    }
];

function Main({ showToast, toggleEnableScrolling }) {
    return (
        <main className="text-white relative overflow-x-hidden">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9">
                <div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-between items-end mb-[18px]">
                        <h2 className="text-2xl font-semibold hover:underline capitalize">
                            <a href="/">Title playlist</a>
                        </h2>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3]">See all</a>
                    </div>

                    <div className="flex gap-5 max-w-screen-5xl grid-playlists">
                        {playlists.slice(0,9).map(playlist => <PlayList 
                            key={playlist.title} 
                            showToast={showToast} 
                            toggleEnableScrolling={toggleEnableScrolling} 
                            {...playlist} 
                        />)}
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-between items-end mb-[18px]">
                        <h2 className="text-2xl font-semibold hover:underline capitalize">
                            <a href="/">Title playlist</a>
                            <p className="text-sm text-[#b3b3b3]">Lorem ipsum.</p>
                        </h2>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3]">See all</a>
                    </div>

                    <div className="flex gap-5 max-w-screen-5xl grid-playlists">
                        {playlists.slice(0,9).map(playlist => <PlayList 
                            key={playlist.title} 
                            showToast={showToast} 
                            toggleEnableScrolling={toggleEnableScrolling} 
                            {...playlist} 
                        />)}
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-between items-end mb-[18px]">
                        <h2 className="text-2xl font-semibold hover:underline capitalize">
                            <a href="/">Title playlist</a>
                            <p className="text-sm text-[#b3b3b3]">Test fugit test, document.</p>
                        </h2>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3]">See all</a>
                    </div>

                    <div className="flex gap-5 max-w-screen-5xl grid-playlists">
                        {playlists.slice(0,9).map(playlist => <PlayList 
                            key={playlist.title} 
                            showToast={showToast} 
                            toggleEnableScrolling={toggleEnableScrolling} 
                            {...playlist} 
                        />)}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main;