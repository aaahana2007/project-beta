import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";
import "./styling/main.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Demonstration from "./components/pages/Demonstration";
import Trial from "./components/pages/Trial";
import WithOrWithOutNav from "./components/WithOrWithOutNav";
import Features from "./components/pages/Features";
import Construction from "./components/Construction";

function App() {
  return (
    <div>
      <ScrollToTop />
      {/* <WithOrWithOutNav /> */}
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/about" exact component={About} />
        <Route path="/gallery" exact component={Demonstration} />
        <Route path="/features" exact component={Features} />
        <Route path="/trial" exact component={Construction} />
        {/* <Route path="/" component={} */}
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
