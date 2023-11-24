import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiLogoTiktok } from 'react-icons/bi'

export const ITEMS_NAV = [
    {
        label: 'Inicio',
        tipo:'si',
        url: '/'
    },
    {
        label: 'Nosotros',
        tipo:'no',
        url: 'nosotros'
    },
    {
        label: 'Servicios',
        tipo:'no',
        url: 'servicios'
    },
    {
        label: 'Proyectos',
        tipo:'no',
        url: 'proyectos'
    },
    {
        label: 'Contactanos',
        tipo:'no',
        url: 'contactanos'
    }
]

export const SOCIAL_NETWORKS = [
    {
        icon: <BiLogoFacebook/>
    },
    {
        icon: <BiLogoInstagram/>
    },
    {
        icon: <BiLogoTwitter/>
    },
    {
        icon: <BiLogoLinkedin/>
    },
    {
        icon: <BiLogoTiktok/>
    }
]