import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiLogoTiktok } from 'react-icons/bi'

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-10 justify-center bg-black text-white pt-14 pb-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-4xl font-bold">FUNGUSWORK</span>
                <span className="text-green-500 text-4xl font-bold">AGENCY</span>
            </div>
            <ul className="flex flex-row gap-5">
                <li className="cursor-pointer hover:text-green-500 text-3xl font-bold">Inicio</li>
                <li className="cursor-pointer hover:text-green-500 text-3xl font-bold">Nosotros</li>
                <li className="cursor-pointer hover:text-green-500 text-3xl font-bold">Servicios</li>
                <li className="cursor-pointer hover:text-green-500 text-3xl font-bold">Proyectos</li>
                <li className="cursor-pointer hover:text-green-500 text-3xl font-bold">Contáctanos</li>
            </ul>
            <ul className='flex flex-row gap-5'>
                <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'><BiLogoFacebook/></li>
                <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'><BiLogoInstagram/></li>
                <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'><BiLogoTwitter/></li>
                <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'><BiLogoLinkedin/></li>
                <li className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'><BiLogoTiktok/></li>
            </ul>
            <span className="text-gray-100 text-lg text-center w-service-width">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</span>
        </footer>
    )
}