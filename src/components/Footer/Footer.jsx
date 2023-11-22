import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ITEMS_NAV, SOCIAL_NETWORKS } from './constants/data'

export const Footer = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    // Esta función maneja la navegación entre secciones.
    const handleSectionClick = (section) => {
        if (location.pathname === '/nuestro-equipo') {
            if (section === 'Servicios' || section === 'Proyectos' || section === 'Contactanos') {
                navigate(`/#${section.toLowerCase()}`);
            } else {
                navigate(section.toLowerCase());
            }
        }
    };

    return (
        <footer className="flex flex-col items-center gap-10 justify-center bg-black text-white pt-14 pb-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-4xl font-bold">FUNGUSWORK</span>
                <span className="text-green-500 text-4xl font-bold">AGENCY</span>
            </div>
            <ul className="flex flex-wrap sm:flex-row items-center justify-between gap-5 w-96 md:w-120">
                {ITEMS_NAV.map((ITEM, index) => {
                    return (
                        <li key={index} className="cursor-pointer w-40 md:w-auto text-2xl font-bold text-left sm:text-left">
                            {ITEM.tipo.startsWith('si') ? (
                                <NavLink to={ITEM.url} className='h-full text-white hover:text-green-500'>
                                    {ITEM.label}
                                </NavLink>
                            ) : (
                                <a
                                    href={`#${ITEM.url}`} // Enlace de anclaje a secciones.
                                    className='h-full text-white hover:text-green-500'
                                    onClick={() => handleSectionClick(ITEM.label)}
                                >
                                    {ITEM.label}
                                </a>
                            )}
                        </li>
                    )
                })}
            </ul>
            <ul className='flex flex-row  gap-5'>
                {SOCIAL_NETWORKS.map((ITEM, I) => {
                    return (
                        <li key={I} className='rounded-full w-16 h-16 border-2 border-solid border-green-100 flex items-center justify-center text-4xl text-green-100 cursor-pointer hover:bg-green-500'>{ITEM.icon}</li>
                    )
                })}
            </ul>
            <span className="text-gray-100 text-lg text-center px-2 py-0 md:px-0 md:py-0">
                Agradecimientos especiales al equipo de <NavLink to="/nuestro-equipo" className="text-green-500 hover:underline hover:text-green-500">desarrollo-a </NavLink>creadores de este sitio web
                <br/> © 2023. Todos los derechos Reservados 
            </span>
        </footer>
    )
}