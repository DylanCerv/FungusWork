import { Service } from "./Service"

export const Services = () => {
    return (
        <div id="servicios" className="md:grid md:grid-cols-1 md:justify-center md:place-cente py-5">
            <div className="flex flex-col items-center gap-8">
                <span className="text-white text-3xl font-bold" data-aos="zoom-in" data-aos-duration="500">Servicios</span>
                <div className="flex flex-wrap items-center justify-center gap-16 md:w-services-container sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full overflow-hidden">
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                        animacion="fade-down-right"
                        duracion="1000"
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                        animacion="fade-down-left"
                        duracion="1500"
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                        animacion="fade-up-right"
                        duracion="2000"
                    />
                    <Service 
                        tittle="Tecnologia & Desarrollo" 
                        description="Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida  funcionalidad y una arquitectura robusta."
                        href='test.com'
                        animacion="fade-up-left"
                        duracion="2500"
                    />
                </div>
            </div>
        </div>
    )
}