import './styles/Proyectos.css'
import './styles/CardProyectos.css'
import { useState } from 'react';
import {data , categories} from './data/data';
import {  CardProyectos, ButtonList } from './components'

function App() {
  // return (
  //   <div className="h-screen">
  //     <header className="flex items-center justify-center h-full">
  //       <pre className="bg-green-500">Fungus Landing</pre>
  //     </header>
  //   </div>
  // );

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
    <>
      <div className="title">
        <h1 className="text-white font-bold">Proyectos</h1>
      </div>

      <ButtonList categories={AllCategories} filterCategory={filterCategory} selectedCategory={selectedCategory} />
      <div className= "container mx-auto">
        <CardProyectos projects={projects} />
      </div>
    </>
  )




}

export default App;
