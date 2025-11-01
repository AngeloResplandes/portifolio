import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main />
      <AboutMe />
      <Experience />
      <Footer />
    </div >
  );
}

export default App;