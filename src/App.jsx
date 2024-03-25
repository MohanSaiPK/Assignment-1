import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { PopularClients } from "./components/PopularClients";
import { Operations } from "./components/Operations";
import { Functions } from "./components/Functions";
import { Demo } from "./components/Demo";
import { CustomerStory } from "./components/CustomerStory";
import { Box } from "./components/Box";
import "@fontsource-variable/nunito-sans";
import { Info } from "./components/Info";
import { Sliders } from "./components/Sliders";
import { Resources } from "./components/Resources";
import { GetStarted } from "./components/GetStarted";
import { About } from "./components/About";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Home />
      <Box />
      <PopularClients />
      <Functions />
      <Operations />

      <Demo />
      <Sliders />
      <Info />
      <CustomerStory />
      <Resources />
      <GetStarted />
      <About />
    </div>
  );
}

export default App;
