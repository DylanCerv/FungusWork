import { InputText } from '../InputText/InputText'
import { Contact } from './Contact'
import style from './ContactInfo.module.css'
import { contacts } from './constants/data'


export const ContactInfo = () => {
    return (
        <div className={style.contact_container}>
            <div className='bg-green-100 flex flex-col justify-center gap-4 w-contact-width h-contact-height rounded-2xl px-14'>
                <span className='text-3xl font-bold'>Contact Info</span> 
                <span className='font-semibold'>
                Objectively innovate your empowered
                manufactured products whereas parallel
                platforms for your ideas.
                </span>
                {contacts.map((c,i) => {
                    return (
                        <Contact key={i} topLabel={c.topLabel} botLabel={c.botLabel} icon={c.icon}></Contact>
                    )
                })}
            </div>
        </div>
    )
}