import AppBar from "./components/AppBar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Home />
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
