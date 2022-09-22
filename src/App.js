import './App.css';
import TopNav from './Components/TopNav'
import About from './Components/About';
import Skills from './Components/Skills';
// import Projects from './Components/Projects';
// import Experience from './Components/Experience';
function App() {
  return (
    <div className="app">
      <h1>Tarun Sai</h1>
      <TopNav/>
      <About />
      <Skills/>
      {/*<Projects/>
      <Experience/> */}
    </div>
  );
}

export default App;
