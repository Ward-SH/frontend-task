import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Panel from "./Panel";
import Navbar from "./Navbar";
import CustomersList from "./CustomersList";
import Create from "./create";

import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Panel />
        <div className="customers-table">
          <Routes>
            <Route path="/" element={<CustomersList></CustomersList>} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
