export const Service = ({src, tittle = "Tittle", description = "Description", href, animacion, duracion, number}) => {
    return (
        <div className="flex flex-col justify-between text-white sm:w-108 md:w-96 xl:w-service-width p-5 gap-7" data-aos={animacion} data-aos-duration={duracion}>
            <div className="flex flex-row items-center justify-center gap-10 px-8">
                <div className="flex items-center justify-center rounded-full border-2 border-solid border-green-500 p-6">
                    <img className="" src={src} alt="" />
                </div>
                <span className="md:text-2xl xl:text-3xl font-bold text-start">{tittle}</span>
            </div>
            <span className="text-md">{description}</span>
            <div className="flex justify-between items-end">
                {href && (
                    <a className="text-gray underline decoration-1" href={href}>Mas Informacion</a>
                )}
                <span className="text-gray text-4xl font-bold">{number}</span>
            </div>
            <div className="flex justify-end">
                <div className="border-2 w-10/12 border-solid border-green-500"/>
            </div>
        </div>
    )
}