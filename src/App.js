import './styles/Proyectos.css'
import { useState } from 'react';
import { ArticleList, ButtonList } from './components'
import {data , categories} from './data/data';
// import { ArticleList } from './components'
// import { ButtonList } from './components/ButtonList'

function App() {
  // return (
  //   <div className="h-screen">
  //     <header className="flex items-center justify-center h-full">
  //       <pre className="bg-green-500">Fungus Landing</pre>
  //     </header>
  //   </div>
  // );

  // const AllCategories = categories;
  // console.log(AllCategories);

  // const [categories, setCategories] = useState(AllCategories)
  // const [articles, setArticles] = useState(data)

  // const filterCategory = (category) => {
  //   console.log(category)
  // }

  // return (
  //   <>
  //     <div className="title">
  //       <h1>Proyectos</h1>
  //     </div>

  //     <ButtonList categories={categories} filterCategory={filterCategory} />
  //     <hr />
  //     <ArticleList articles={articles} />
  //   </>
  // )

  const AllCategories = categories;

  const [selectedCategory, setSelectedCategory] = useState('Todas'); // Estado para la categoría seleccionada
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    setSelectedCategory(category);
    // Filtra los artículos basados en la categoría seleccionada
    const filteredArticles = category === 'Todas' ? data : data.filter(article => article.category === category);
    setArticles(filteredArticles);
  }

  return (
    <>
      <div className="title">
        <h1 className="text-green-500">Proyectos</h1>
      </div>

      <ButtonList categories={AllCategories} filterCategory={filterCategory} selectedCategory={selectedCategory} />
      <hr />
      <ArticleList articles={articles} />
    </>
  )




}

export default App;
