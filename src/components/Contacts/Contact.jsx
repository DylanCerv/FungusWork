export const Contact = ({topLabel, botLabel, icon}) => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <div className="text-5xl md:text-4xl text-green-500">
                {icon}
            </div>
            <div className="flex flex-col sm:text-white xl:text-black">
                <span className="font-semibold text-xl sm:text-2xl lg:text-lg">{topLabel}</span>
                <span className="font-semibold text-xl sm:text-2xl lg:text-lg">{botLabel}</span>
            </div>
        </div>
    )
}