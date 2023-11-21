import '../styles/Proyectos.css'
import '../styles/CardProyectos.css'
import { useState, useEffect } from 'react';
import {data , categories} from '../data/data';
import {  CardProyectos, ButtonList } from '../components'
import { Services } from '../components/Services/Services';
import { ContactInfo } from '../components/Contacts/ContactInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const TEXTS = {
  Section1: {
    titleP: 'FUNGUS WORK',
    titleS: 'AGENCY',
  },
  Section2: {
    title: 'FungusWork Agency',
    description1: 'En Funguswork Agency, nos dedicamos a destacar tu negocio en el mundo digital. Con los mejores especialistas en desarrollo web, diseño y marketing, creamos soluciones únicas para impulsar tu presencia en línea. En nuestra agencia, tu éxito es nuestra prioridad absoluta. Nos esforzamos incansablemente por ofrecer resultados excepcionales. Únete a nosotros en esta emocionante travesía hacia el triunfo digital, porque en Funguswork Agency, tu triunfo es nuestra mayor recompensa. En Funguswork Agency nos esforzamos por ti, su éxito es nuestro éxito.',
  },
}


export const Home = () => {

  useEffect(() => {
    AOS.init(); // Inicializa AOS
  }, []);

  const AllCategories = categories;

  const [selectedCategory, setSelectedCategory] = useState('Todas'); // Estado para la categoría seleccionada
  const [projects, setProjects] = useState(data);

  const filterCategory = (category) => {
    setSelectedCategory(category);
    // Filtra los proyectos basados en la categoría seleccionada
    const filteredProjects = category === 'Todas' ? data : data.filter(project => project.category === category);
    setProjects(filteredProjects);
  }

  return (
      <main>
        <section className='relative !py-0'>
          {/* <Header/> */}
          <img
            className='absolute -z-10 top-0 left-0 w-full'
            src="/img/bg-top.svg"
            alt="bg"
          />
          <img
            className='absolute -z-10 bottom-0 left-0 w-full'
            src="/img/bg-bottom.svg"
            alt="bg"
          />
          <article className='text-white  py-20 px-4 text-center text-6xl md:text-start md:text-7xl md:px-20 h-[60vh] md:h-[70vh] lg:text-8xl lg:h-[100vh] xl:h-screen'>
            <h1 className='font-semibold italic mt-[14vh] md:mt-[20vh]' data-aos="fade-right" data-aos-duration="500">{TEXTS.Section1.titleP}</h1>
            <h1 className='' data-aos="fade-right" data-aos-duration="1000">{TEXTS.Section1.titleS}</h1>
          </article>
        </section>
        <section className='text-white py-20 px-10 flex flex-col gap-10 items-center justify-center text-center md:px-20 lg:p-40'>
          <img
            src="/logo/logo2.svg"
            alt="Logo"
          />
          <h1 className='text-4xl font-semibold' data-aos="zoom-in" data-aos-duration="500">{TEXTS.Section2.title}</h1>
          <p className='text-xl' data-aos="zoom-in-up" data-aos-duration="1000">{TEXTS.Section2.description1}</p>
          <Link
            className='bg-primary text-white font-semibold rounded-full px-8 py-4 hover:text-white'
            to={'nuestro-equipo'}>Nuestro Equipo</Link>
        </section>
        <Services/>
        <section
          id='proyectos'
          className="section-bc"
        >
          <div className="title">
            <h1 className="text-white font-bold slide-right" data-aos="zoom-in" data-aos-duration="500">Proyectos</h1>
          </div>

          <ButtonList categories={AllCategories} filterCategory={filterCategory} selectedCategory={selectedCategory} />
          <div className= "container mx-auto">
            <CardProyectos projects={projects} />
          </div>
        </section>
        <ContactInfo/>
      </main>

  );
}

export default Home;
