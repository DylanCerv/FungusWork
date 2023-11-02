import style from './InputText.module.css'

export const InputText = ({name = 'text', label = 'Input Test', placeholder = '', textarea = false, text = ''}) => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <span className='text-green-600 text-xl font-bold w-84'>{label}</span>
            {textarea ? (
                <textarea name={name} id={name} placeholder={placeholder} className={style.textArea}>{text}</textarea>
            ) : (
                <input type="text" name={name} id={name} placeholder={placeholder}/>
            )}
        </div>
    )
}