import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


const TEXTSNav = {
    logo: {name: 'FungusWork', url: '/'},
    // El tipo define si es una página o no
    // Por ejemplo los que tienen no, son solo secciones del home.
    options: [
        {name: 'Inicio', tipo:'si', url: '/'},
        {name: 'Nosotros', tipo:'no', url: 'nosotros'},
        {name: 'Servicios', tipo:'no', url: 'servicios'},
        {name: 'Proyectos', tipo:'no', url: 'proyectos'},
    ],
    contact: 'Contactanos',
    contactURL: '/#contactanos'
}


export default function NavBar() {

    const [active, setActive] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleActive = () => {
        setActive(!active);
    }

    const handleDesactive = () => {
        setActive(false);
    }

    // Esta función maneja la navegación entre secciones.
    const handleSectionClick = (section) => {
        if (location.pathname === '/nuestro-equipo') {
            if (section === 'Servicios' || section === 'Nosotros' || section === 'Proyectos' || section === 'Contactanos') {
                navigate(`/#${section.toLowerCase()}`);
            } else {
                navigate(section.toLowerCase());
            }
        }
    };


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
                            {data.tipo.startsWith('si') ? (
                                <NavLink to={data.url} onClick={handleDesactive} className='h-full text-white hover-text-green-100 hover:text-white'>
                                    {data.name}
                                </NavLink>
                            ) : (
                                <a
                                    href={`#${data.url}`} // Enlace de anclaje a secciones.
                                    className='h-full text-white hover-text-green-100 hover:text-white'
                                    onClick={() => {
                                            handleDesactive();
                                            handleSectionClick(data.name)
                                        }
                                    }
                                >
                                    {data.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                <div className='mr-auto lg:mr-0 bg-primary px-6 py-3 rounded-full text-xl font-semibold'>
                <a 
                    href={`${TEXTSNav.contactURL}`} 
                    className='!text-white'
                    onClick={() => {
                            handleDesactive();
                            handleSectionClick(TEXTSNav.contact)
                        }
                    }     
                    >
                        {TEXTSNav.contact}
                </a>
                </div>
            </div>
        </nav>
    </header>
  )
}


function Logo () {
    return (
        <NavLink to={TEXTSNav.logo.url}>
            <div className='flex flex-row gap-4 items-end text-white'>
                <img
                    className='w-14'
                    src="/logo/Fongus_LogoBlanco.svg"
                    alt="Logo"
                />
                <p className='text-2xl font-bold tracking-wider'>{TEXTSNav.logo.name}</p>
            </div>
        </NavLink>

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