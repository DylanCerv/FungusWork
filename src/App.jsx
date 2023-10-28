import Header from './share/components/Header/Header';


const TEXTS = {
  Section1: {
    titleP: 'FUNGUS WORK',
    titleS: 'AGENCY',
  },
  Section2: {
    title: 'FungusWork Agency',
    description: 'The idea for Cedar came to our co-founder after a nightmarish personal journey through the healthcare system led to confusion, frustration and disappointment. One thing was clear: The system needed to change. Because when the patient experience is convenient and clear, it leads to significantly better outcomes for providers, payers and the people they serve. Cedar’s mission is to make healthcare more affordable and accessible through our consumer-friendly platform that’s powered by data science, smart product design and personalization.',
  },
}


function App() {
  return (
    <div className="h-screen px-6">
      <Header/>
      <main className='px-20'>
        <section className='text-7xl'>
          <h1 className='font-semibold italic'>{TEXTS.Section1.titleP}</h1>
          <h1 className='text-secundary'>{TEXTS.Section1.titleS}</h1>
          <br />
          <br />
          <p className='text-base'>falta los vectores de la imagen de fondo</p>
          <br />
        </section>
        <section className='flex flex-col gap-10 items-center justify-center text-center lg:p-20'>
          <img
            src="/logo/logo2.svg"
            alt="Logo"
          />
          <h1 className='text-4xl'>{TEXTS.Section2.title}</h1>
          <p className='text-2xl'>{TEXTS.Section2.description}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
