import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />}  path="/" />
        <Route element={<ResultsPage />}  path="/ResultsPage" />
      </Routes>
    </div>
  );
}

export default App;
