import { DATA_SERVICES } from "../../data/dataServicios"
import { Service } from "./Service"

export const Services = () => {
    return (
        <div id="servicios" className="md:grid md:grid-cols-1 md:justify-center md:place-cente py-5">
            <div className="flex flex-col items-center gap-8">
                <span className="text-white text-3xl font-bold" data-aos="zoom-in" data-aos-duration="500">Servicios</span>
                <div className="flex flex-wrap items-center justify-center gap-16 md:w-services-container sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full overflow-hidden">
                    {DATA_SERVICES.map((data, index)=>(
                        <Service 
                            key={index}
                            src={data.image}
                            tittle={data.title}
                            description={data.description}
                            href={data.href}
                            animacion={data.animacion}
                            duracion="1000"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}