import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main />
      <AboutMe />
    </div >
  );
}

export default App;