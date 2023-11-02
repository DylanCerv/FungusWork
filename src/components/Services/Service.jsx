export const Service = ({tittle = "Tittle", description = "Description", href}) => {
    return (
        <div className="flex flex-col justify-between text-white xl:w-service-width h-service-height p-5 gap-7">
            <div className="flex flex-row items-center justify-center gap-10 px-8">
                <div className="flex items-center justify-center rounded-full border-2 border-solid border-green-500 w-16 h-16 p-10">ICONO</div>
                <span className="md:text-2xl xl:text-3xl font-bold text-start">{tittle}</span>
            </div>
            <span className="md:text-xs xl:text-sm">{description}</span>
            <div className="flex justify-between items-end">
                {href && (
                    <a className="text-gray underline decoration-1" href={href}>Mas Informacion</a>
                )}
                <span className="text-gray text-4xl font-bold">01</span>
            </div>
            <div className="flex justify-end px-8">
                <div className="border-2 w-full border-solid border-green-500"/>
            </div>
        </div>
    )
}