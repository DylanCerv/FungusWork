export const Contact = ({topLabel, botLabel, icon}) => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <div className="text-4xl text-green-500">
                {icon}
            </div>
            <div className="flex flex-col text-black">
                <span className="font-semibold">{topLabel}</span>
                <span className="font-semibold">{botLabel}</span>
            </div>
        </div>
    )
}