import React, { useState } from 'react'


const TEXTSNav = {
    logo: 'FungusWork',
    options: [
        {name: 'Inicio', url: '#'},
        {name: 'Nosotros', url: '#'},
        {name: 'Servicios', url: '#'},
        {name: 'Proyectos', url: '#'},
    ],
    contact: 'Contactanos',
    contactURL: '#'
}


export default function Header() {

    const [active, setActive] = useState(false);


    const handleActive = () => {
        setActive(true);
    }


  return (
    <header className='px-4 py-6 flex flex-row items-center justify-between'>
        <div className='flex flex-row gap-4 items-center'>
            <img
                src="/logo/logo.svg"
                alt="Logo"
            />
            <p className='text-2xl'>{TEXTSNav.logo}</p>
        </div>
        <div
            onClick={handleActive}
            className='lg:hidden'
        >
            
        </div>
        <div className='hidden lg:flex flex-row items-center gap-6'>
            <ul className='flex flex-row gap-6 text-2xl'>
                {TEXTSNav.options.map((data, index)=>(
                    <li key={index}>
                        <a href={data.url} className='h-full'>{data.name}</a>
                    </li>
                ))}
            </ul>
            <div className='bg-primary px-6 py-4 rounded-full text-lg'>
                <a href={TEXTSNav.contactURL}>{TEXTSNav.contact}</a>
            </div>
        </div>
    </header>
  )
}
