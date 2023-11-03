import { InputText } from '../InputText/InputText'
import { Contact } from './Contact'
import style from './ContactInfo.module.css'
import { contacts } from './constants/data'


export const ContactInfo = () => {
    return (
        <div className={style.contact_container}>
            <div className='bg-green-100 flex flex-col justify-center gap-4 md:w-contact-width h-contact-height rounded-2xl px-14'>
                <span className='text-3xl font-bold text-black'>Contact Info</span> 
                <span className='font-semibold text-black'>
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
            <div className='flex flex-col items-center justify-center gap-8 pb-16'>
                <span className='text-4xl font-bold text-green-500'>Contactanos</span>
                <div className='flex justify-between gap-5'>
                    <InputText label='What’s your name?' placeholder='Full name' className='w-64 md:w-96'/>
                    <InputText label='What’s your email address?' placeholder='Email address' className='w-64 md:w-96'/>
                </div>
                <div className='flex justify-between gap-5'>
                    <InputText label='What’s your phone number?' placeholder='Phone number' className='w-64 md:w-96'/>
                    <InputText label='Email subject' placeholder='Subject' className='w-64 md:w-96'/>
                </div>
                <textarea name="" id="" rows="10" className="w-108 md:w-120 p-4 text-white resize-none rounded-xl"></textarea>
                <div className='flex justify-start w-full md:w-120'>
                    <button className='bg-green-500 text-green-100 text-xl font-bold text-gray w-52 h-14 rounded-full'>Send Message</button>
                </div>
            </div>
        </div>
    )
}


{/* <div className='flex justify-between gap-5'>
    <InputText label='What’s your name?' placeholder='Full name'/>
    <InputText label='What’s your email address?' placeholder='Email address'/>
</div>
<div className='flex justify-between gap-5'>
    <InputText label='What’s your phone number?' placeholder='Phone number'/>
    <InputText label='Email subject' placeholder='Subject'/>
</div> */}