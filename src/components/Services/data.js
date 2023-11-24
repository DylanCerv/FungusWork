import { FaLaptop } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import { RiRepeatLine } from "react-icons/ri";

export const services = [
    {
        tittle: "Páginas Web",
        description: "Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida funcionalidad y una arquitectura robusta.",
        href: '',
        icon: <FaLaptop/>,
        animation: "fade-down-right",
        duration: "1000"
    },
    {
        tittle: "Diseño Visual y Creatividad Online",
        description: "Eleva tu presencia digital con nuestras opciones de diseño. Desde post cautivadores hasta proyectos visuales a medida. Descubre cómo podemos potenciar tu imagen online.",
        href: '',
        icon: <FaPenNib/>,
        animation: "fade-down-left",
        duration: "1000"
    },
    {
        tittle: "Anuncia con Impacto en Redes Sociales",
        description: "Potencia tu visibilidad online con nuestro servicio SEM. Desde campañas personalizadas hasta configuración de anuncios. ¡Optimiza tu presencia y alcanza a tu audiencia clave!",
        href: '',
        icon: <FaBullhorn/>,
        animation: "fade-down-right",
        duration: "1000"
    },
    // {
    //     tittle: "Servicios Adicionales",
    //     description: "Analizamos y comprendemos los requerimientos de nuestros clientes para diseñar y desarrollar soluciones eficientes, con una interfaz de usuario bien diseñada, en combinación con una sólida funcionalidad y una arquitectura robusta.",
    //     href: '',
    //     icon: <FaShoppingBag/>,
    //     animation: "fade-down-left",
    //     duration: "1000"
    // },
    {
        tittle: "Códigos QR a Medida",
        description: "Impulsa tu presencia con paquetes de códigos QR. Desde básicos hasta personalizados, facilitando la interacción con tu audiencia.",
        href: '',
        icon: <AiOutlineQrcode/>,
        animation: "fade-down-left",
        duration: "1000"
    },
    {
        tittle: "Comunity Pro",
        description: "Impulsa tu presencia en redes con nuestros paquetes. Desde gestión básica hasta completa en múltiples plataformas. ¡Conéctate con tu audiencia de manera efectiva!",
        href: '',
        icon: <RiRepeatLine />,
        animation: "fade-down-right",
        duration: "1000"
    },
    {
        tittle: "Webmaster Todo en Uno",
        description: "Descubre nuestros paquetes de gestión web. Desde blogs hasta eCommerce, optimizamos tu presencia online. ¡Delega el mantenimiento y enfócate en tu negocio!",
        href: '',
        icon: <MdOutlineShoppingCart/>,
        animation: "fade-down-left",
        duration: "1000"
    }
]