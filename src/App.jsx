// import Header from './share/components/Header/Header';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NuestroEquipo from './pages/Nuestro-Equipo';
import Home from './pages/Home';
import Header from './share/components/Header/Header';
import { Services } from './components/Services/Services'
import { ContactInfo } from './components/Contacts/ContactInfo'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react';
import { categories, data } from './data/data';
import { ButtonList, CardProyectos } from './components';

function App() {

  const AllCategories = categories;

  const [selectedCategory, setSelectedCategory] = useState('Todas'); // Estado para la categoría seleccionada
  const [projects, setProjects] = useState(data);

  const filterCategory = (category) => {
    setSelectedCategory(category);
    // Filtra los proyectos basados en la categoría seleccionada
    const filteredProjects = category === 'Todas' ? data : data.filter(project => project.category === category);
    setProjects(filteredProjects);
  }

  const TEXTS = {
    Section1: {
      titleP: 'FUNGUS WORK',
      titleS: 'AGENCY',
    },
    Section2: {
      title: 'FungusWork Agency',
      description1: 'The idea for Cedar came to our co-founder after a nightmarish personal journey through the healthcare system led to confusion, frustration and disappointment.',
      description2: 'One thing was clear: The system needed to change. Because when the patient experience is convenient and clear, it leads to significantly better outcomes for providers, payers and the people they serve. Cedar’s mission is to make healthcare more affordable and accessible through our consumer-friendly platform that’s powered by data science, smart product design and personalization.',
    },
  }

  return (
    <div className="h-screen">
      <main>
        <section className='relative !py-0'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Home />} /> {/* Nueva página */}
            <Route path="/nuestro-equipo" element={< NuestroEquipo />} /> {/* Nueva página */}
          </Routes>
        </BrowserRouter>
          <img
            className='absolute -z-10 top-0 left-0 w-full'
            src="/img/bg-top.svg"
            alt="bg"
          />
          <article className='h-[40vh] sm:h-[50vh] py-20 px-4 text-center text-6xl md:text-start md:text-7xl md:px-20 md:h-[90vh] lg:text-8xl lg:h-[100vh] xl:h-screen'>
            <h1 className='font-semibold italic text-white'>{TEXTS.Section1.titleP}</h1>
            <h1 className='text-secundary'>{TEXTS.Section1.titleS}</h1>
          </article>
        </section>
        <section className='py-20 px-10 flex flex-col gap-10 items-center justify-center text-center md:px-20 lg:p-40'>
          <img
            src="/logo/logo2.svg"
            alt="Logo"
          />
          <h1 className='text-4xl text-white'>{TEXTS.Section2.title}</h1>
          <div>
            <p className='text-2xl text-white'>{TEXTS.Section2.description1}</p>
            <p className='text-2xl text-white'>{TEXTS.Section2.description2}</p>
          </div>
        </section>
        <section>
          <div className="title">
            <h1 className="text-white font-bold">Proyectos</h1>
          </div>

          <ButtonList categories={AllCategories} filterCategory={filterCategory} selectedCategory={selectedCategory} />
          <div className= "container mx-auto">
            <CardProyectos projects={projects} />
          </div>
        </section>
        <Services/>
        <ContactInfo/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
