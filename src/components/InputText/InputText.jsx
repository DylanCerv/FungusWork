import './InputText.module.css'

export const InputText = ({name = 'text', label = 'Input Test', placeholder = '', className}) => {
    return (
        <div className="flex flex-col gap-4 flex-1">
            <span className='text-green-600 text-lg font-bold w-auto'>{label}</span>
            <input type="text" name={name} id={name} placeholder={placeholder} className={className}/>
        </div>
    )
}