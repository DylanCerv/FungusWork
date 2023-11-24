import { InputText } from '../InputText/InputText'
import { Contact } from './Contact'
import style from './ContactInfo.module.css'
import { contacts } from './constants/data'


export const ContactInfo = () => {
    return (
        <div id='contactanos' className={style.contact_container}>
            <div className='bg-transparent xl:bg-green-100 flex flex-col justify-center gap-4 sm:gap-12 lg:gap-4 md:w-contact-width h-contact-height rounded-2xl px-14 shadow-2xl border-4 border-green-500 xl:border-none'>
                <span className='text-5xl sm:text-5xl font-bold sm:text-white xl:text-black'>Contact Info</span> 
                <span className='text-xl sm:text-2xl lg:text-lg font-semibold sm:text-white xl:text-black'>
                Objectively innovate your empowered
                manufactured products whereas parallel
                platforms for your ideas.
                </span>
                <div className='flex flex-col md:flex-row lg:flex-col flex-wrap justify-between gap-6 sm:gap-3'>
                {contacts.map((c,i) => {
                    return (
                        <Contact key={i} topLabel={c.topLabel} botLabel={c.botLabel} icon={c.icon}></Contact>
                    )
                })}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 pb-16'>
                <span className='text-4xl font-bold text-green-500'>Contactanos</span>
                <div className='flex flex-col sm:flex-row justify-between gap-5'>
                    <InputText label='What’s your name?' placeholder='Full name' className='w-104 sm:w-96'/>
                    <InputText label='What’s your email address?' placeholder='Email address' className='w-104 sm:w-96'/>
                </div>
                <div className='flex flex-col sm:flex-row justify-between gap-5'>
                    <InputText label='What’s your phone number?' placeholder='Phone number' className='w-104 sm:w-96'/>
                    <InputText label='Email subject' placeholder='Subject' className='w-104 sm:w-96'/>
                </div>
                <textarea name="" id="" rows="10" className="w-100 sm:w-108 md:w-120 p-4 text-white resize-none rounded-xl"></textarea>
                <div className='flex justify-start w-full md:w-120'>
                    <button className='bg-green-500 text-green-100 text-xl font-bold text-gray w-52 h-14 rounded-full'>Send Message</button>
                </div>
            </div>
        </div>
    )
}