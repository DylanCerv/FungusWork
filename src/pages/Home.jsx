import '../styles/Proyectos.css'
import '../styles/CardProyectos.css'
import { useState, useEffect } from 'react';
import {data , categories} from '../data/data';
import {  CardProyectos, ButtonList } from '../components'
import { Services } from '../components/Services/Services';
import { ContactInfo } from '../components/Contacts/ContactInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TEXTS = {
  Section1: {
    titleP: 'FUNGUS WORK',
    titleS: 'AGENCY',
  },
  Section2: {
    title: 'FungusWork Agency',
    description1: 'The idea for Cedar came to our co-founder after a nightmarish personal journey through the healthcare system led to confusion, frustration and disappointment. One thing was clear: The system needed to change. Because when the patient experience is convenient and clear, it leads to significantly better outcomes for providers, payers and the people they serve. Cedar’s mission is to make healthcare more affordable and accessible through our consumer-friendly platform that’s powered by data science, smart product design and personalization.',
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
          <h1 className='text-4xl' data-aos="zoom-in" data-aos-duration="500">{TEXTS.Section2.title}</h1>
          <p className='text-xl' data-aos="zoom-in-up" data-aos-duration="1000">{TEXTS.Section2.description1}</p>
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
