import Navbar from "./assets/components/Navbar";
import  Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Article from "./assets/components/Article";
import TableSection from "./assets/components/TableSection";
import Aside from "./assets/components/Aside";
import Footer from "./assets/components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <div className='container flex flex-col md:flex-row mx-auto p-6'>
        <main className='flex-1'>
          <Article/>
      <TableSection/>
        </main>
        <Aside/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
