import { ITEMS_NAV, SOCIAL_NETWORKS } from './constants/data'

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-10 justify-center bg-black text-white pt-14 pb-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-4xl font-bold">FUNGUSWORK</span>
                <span className="text-green-500 text-4xl font-bold">AGENCY</span>
            </div>
            <ul className="flex flex-row gap-5">
                {ITEMS_NAV.map((ITEM) => {
                    return (
                        <li className="cursor-pointer hover:text-green-500 text-1xl font-bold">{ITEM.label}</li>
                    )
                })}
            </ul>
            <ul className='flex flex-row gap-5'>
                {SOCIAL_NETWORKS.map((ITEM) => {
                    return (
                        <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'>{ITEM.icon}</li>
                    )
                })}
            </ul>
            <span className="text-gray-100 text-lg text-center p-1 md:p-0 md:w-service-width">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</span>
        </footer>
    )
}