import React from 'react'

export default function Header() {
  return (
    <header className='px-4 py-6 flex flex-row items-center justify-between'>
        <div className='flex flex-row gap-4 items-center'>
            <img
                src="/logo/logo.svg"
                alt="Logo"
            />
            <p className='text-2xl'>FungusWork</p>
        </div>
        <div className='flex flex-row items-center gap-6'>
            <ul className='flex flex-row gap-6 text-2xl'>
                <li>
                    <a href="#" className='h-full'>Inicio</a>
                </li>
                <li>
                    <a href="#" className='my-auto'>Nosotros</a>
                </li>
                <li>
                    <a href="#" className='my-auto'>Servicios</a>
                </li>
                <li>
                    <a href="#" className='my-auto'>Proyectos</a>
                </li>
            </ul>
            <div className='bg-primary px-6 py-4 rounded-full'>
                <a href="#">Contactanos</a>
            </div>
        </div>
    </header>
  )
}
