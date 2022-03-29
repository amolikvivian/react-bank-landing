import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import First from "./components/FirstSection/First";
import Second from "./components/SecondSection/Second";
import Third from "./components/ThirdSection/Third";
import Fourth from "./components/FourthSection/Fourth";
import Fifth from "./components/FifthSection/Fifth";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="container">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
}

export default App;
