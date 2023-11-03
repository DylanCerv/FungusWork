import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const TEXTSNav = {
    logo: {name: 'FungusWork', url: '/'},
    options: [
        {name: 'Inicio', url: '/'},
        {name: 'Nosotros', url: '/nuestro-equipo'},
        {name: 'Servicios', url: '/#servicios'},
        {name: 'Proyectos', url: '/#proyectos'},
    ],
    contact: 'Contactanos',
    contactURL: '/#contacto'
}


export default function NavBar() {

    const [active, setActive] = useState(false);


    const handleActive = () => {
        setActive(!active);
    }


  return (
    <header className='absolute top-0 z-[100] w-full'>
        <nav className='px-10 py-6 flex flex-row items-center justify-between'>
            <Logo/>
            {!active && 
                <Hamburger
                    src={"/icons/hamburger.svg"}
                    onClick={handleActive}
                />
            }
            <div className={`bg-black absolute left-0 top-0 pt-6 px-10 w-full h-screen flex flex-col justify-start !gap-10 ${active ? '!fixed' : 'hidden'} lg:bg-opacity-0 lg:!static lg:h-fit lg:flex lg:flex-row lg:justify-end lg:!w-fit items-center gap-6`}>
                <div className='lg:hidden flex items-center justify-between w-full'>
                    <Logo/>
                    <Hamburger
                        className={'right-10 top-5'}
                        src={"/icons/close.svg"}
                        onClick={handleActive}
                    />
                </div>
                <ul className='mr-auto lg:mr-0 mt-10 lg:my-auto flex flex-col lg:flex-row gap-6 text-2xl font-semibold'>
                    {TEXTSNav.options.map((data, index)=>(
                        <li key={index}>
                            <Link to={data.url} className='h-full text-white hover:text-green-100'>{data.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='mr-auto lg:mr-0 bg-primary px-6 py-3 rounded-full text-xl font-semibold'>
                    <Link to={TEXTSNav.contactURL} className='!text-white'>{TEXTSNav.contact}</Link>
                </div>
            </div>
        </nav>
    </header>
  )
}


function Logo () {
    return (
        <Link to={TEXTSNav.logo.url}>
            <div className='flex flex-row gap-4 items-end text-white'>
                <img
                    className='w-14'
                    src="/logo/Fongus_LogoBlanco.svg"
                    alt="Logo"
                />
                <p className='text-2xl font-bold tracking-wider'>{TEXTSNav.logo.name}</p>
            </div>
        </Link>

    )
}

function Hamburger ({className, src, onClick}) {
    return (
        <div
            className={`lg:hidden p-3 bg-green-500 rounded-full cursor-pointer ${className}`}
            onClick={onClick}
        >
            <img
                className='w-5'
                src={src}
                alt="Logo"
            />
        </div>
    )
}