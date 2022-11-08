import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />}  path="/" />
        <Route element={<ResultsPage />}  path="/ResultsPage" />
        <Route element={<SignUp />}  path="/SignUp" />
      </Routes>
    </div>
  );
}

export default App;
