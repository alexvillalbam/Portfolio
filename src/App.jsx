import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";


function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      <main className="flex-[3]">
        <Home />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      </div>
    </>
  );
}

export default App;
