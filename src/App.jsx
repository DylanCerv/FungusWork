import './App.css';
import Header from './share/components/Header/Header';

function App() {
  return (
    <div className="h-screen px-6">
      <Header/>
      <main className='px-20'>
        <section className='text-7xl'>
          <h1 className='font-semibold italic'>FUNGUS WORK</h1>
          <h1 className='text-secundary'>AGENCY</h1>
          <br />
          <br />
          <p>falta los vectores de la imagen de fondo</p>
        </section>
        <section className='flex flex-col gap-10 items-center justify-center text-center p-20'>
          <img
            src="/logo/logo2.svg"
            alt="Logo"
          />
          <h1 className='text-4xl'>FungusWork Agency</h1>
          <p className='text-2xl'>
            The idea for Cedar came to our co-founder after a nightmarish personal journey through the healthcare system led to confusion, frustration and disappointment. One thing was clear: The system needed to change. Because when the patient experience is convenient and clear, it leads to significantly better outcomes for providers, payers and the people they serve. Cedar’s mission is to make healthcare more affordable and accessible through our consumer-friendly platform that’s powered by data science, smart product design and personalization.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
