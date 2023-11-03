// import Header from './share/components/Header/Header';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NuestroEquipo from './pages/Nuestro-Equipo';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import { Services } from './components/Services/Services'
import { ContactInfo } from './components/Contacts/ContactInfo'
import { Footer } from './components/Footer/Footer';
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
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Home />} /> {/* Nueva página */}
            <Route path="/nuestro-equipo" element={< NuestroEquipo />} /> {/* Nueva página */}
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
