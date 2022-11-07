import About from "./components/about/About";
import ChoosePackage from "./components/choose-package/ChoosePackage";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import OurClasses from "./components/our-classes/OurClasses";
import Schedule from "./components/schedule/Schedule";
import Services from "./components/services/Services";
import StartTraining from "./components/start-training/StartTraining";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <OurClasses />
      <StartTraining />
      <Schedule />
      <Gallery />
      <ChoosePackage />
      <Footer />
    </div>
  );
}

export default App;
