import { Service } from "./Service"

export const Services = () => {
    return (
        <div className="md:grid md:grid-cols-1 md:justify-center md:place-center md:h-screen py-5 md:mb-20">
            <div className="flex flex-col items-center justify-center xl:h-full gap-8">
                <span className="text-white text-3xl font-bold">Servicios</span>
                <div className="flex flex-wrap items-center justify-center gap-16 md:w-services-container">
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                    />
                </div>
            </div>
        </div>
    )
}